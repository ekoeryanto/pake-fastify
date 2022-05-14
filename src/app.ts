import { FastifyPluginAsync } from 'fastify';
import { plugins } from './plugins';
import { routes } from './routes';

export type AppOptions = {
  // Place your custom options for app below here.
};

export const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
): Promise<void> => {
  fastify.register(plugins);
  fastify.register(routes);
};
