import { FastifyPluginAsync } from 'fastify';

// eslint-disable-next-line @typescript-eslint/naming-convention
const { npm_package_name, npm_package_version } = process.env;

const about: FastifyPluginAsync = async (fastify) => {
  fastify.get('/about', async () => ({
    name: npm_package_name,
    version: npm_package_version,
  }));
};

export default about;
