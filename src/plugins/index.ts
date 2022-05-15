import fp from 'fastify-plugin';
import sensible from '@fastify/sensible';

import support from './support';

export interface PluginOptions { }

export const plugins = fp(async (app) => {
  // register plugins
  app.register(sensible);

  // register custom plugins
  app.register(support);
});
