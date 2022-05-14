import Fastify from 'fastify';
import closeWithGrace from 'close-with-grace';
import { app } from './app';

const fastify = Fastify({
  logger: true,
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
  // if (options.abort) {
  //   process.abort();
  // }
  process.exit(1);
});

// Start listening.
fastify.listen({
  port: +process.env.PORT! || 3000,
}, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
