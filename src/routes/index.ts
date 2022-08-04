import { FastifyPluginAsync } from 'fastify';
import about from './about';

export interface RouteOptions {}

export const routes: FastifyPluginAsync<RouteOptions> = async (app) => {
  app.register(about);
};
