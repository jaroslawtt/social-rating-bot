import fastify from 'fastify';

const server = fastify();

const main = async () => {
    await server.listen({ port: 8080 });
    console.log('Server started...');
};

main();