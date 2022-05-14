import { FastifyPluginAsync } from 'fastify';
import example from './example';
import root from './root';

export interface RouteOptions {}

export const routes: FastifyPluginAsync<RouteOptions> = async (app) => {
  app.register(root);
  app.register(example, { prefix: '/example' });
};
