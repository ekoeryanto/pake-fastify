import Fastify from 'fastify';
import closeWithGrace from 'close-with-grace';
import { app } from './app';

const {
  NODE_ENV, HOST = '0.0.0.0', PORT = '3173', TRUST_PROXY, ABORT_UNHANDLED,
} = process.env;

const fastify = Fastify({
  trustProxy: TRUST_PROXY || HOST,
  logger: {
    transport:
      NODE_ENV !== 'production'
        ? {
          target: 'pino-pretty',
          options: {
            translateTime: 'SYS:standard',
            ignore: 'pid,hostname',
          },
        }
        : undefined,
  },
});

fastify.register(app);

// delay is the number of milliseconds for the graceful close to finish
const closeListeners = closeWithGrace(
  { delay: 500 },
  async ({ err }: any) => {
    if (err) {
      fastify.log.error(err);
    }
    await fastify.close();
  },
);

fastify.addHook('onClose', async (instance, done) => {
  closeListeners.uninstall();
  done();
});

process.on('unhandledRejection', (err) => {
  fastify.log.error(err);
  if (ABORT_UNHANDLED) {
    process.abort();
  }
  process.exit(1);
});

// Start listening.
fastify.listen({
  host: HOST,
  port: parseInt(PORT, 10),
}, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
