import { FastifyPluginAsync } from 'fastify';

const root: FastifyPluginAsync = async (fastify) => {
  fastify.get('/', async () => ({ root: true }));
};

export default root;
