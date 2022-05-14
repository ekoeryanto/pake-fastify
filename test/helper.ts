// This file contains code that we reuse between our tests.
import Fastify from 'fastify';
import fp from 'fastify-plugin';

import { app, AppOptions } from '../src/app';

// Fill in this config with all the configurations
// needed for testing the application
export function configure(): AppOptions {
  return {};
}

// Automatically build and tear down our instance
export function createFastify(t: Tap.Test) {
  const fastify = Fastify();

  // Tear down our app after we are done
  t.teardown(async () => {
    await fastify.close();
  });

  return fastify;
}

export async function createApp(t: Tap.Test) {
  const fastify = createFastify(t);

  // fastify-plugin ensures that all decorators
  // are exposed for testing purposes, this is
  // different from the production setup
  fastify.register(fp(app), configure());

  await fastify.ready();

  return fastify;
}
