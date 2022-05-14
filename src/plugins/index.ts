import { FastifyPluginAsync } from 'fastify';
import sensible from '@fastify/sensible';
import support from './support';

export interface PluginOptions {}

export const plugins: FastifyPluginAsync<PluginOptions> = async (app) => {
  // register plugins
  app.register(sensible);

  // register custom plugins
  app.register(support);
};
