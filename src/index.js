import fastify from 'fastify';

export default () => {
  const app = fastify({
    logger: true,
  });

  app.get('/', async () => ({ hello: 'world' }));

  return app;
};
