import { FastifyPluginAsync } from 'fastify';

const example: FastifyPluginAsync = async (fastify) => {
  fastify.get('/', async () => 'this is an example');
};

export default example;
