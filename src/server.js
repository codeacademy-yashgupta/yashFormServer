const Hapi = require('hapi');
const routes = require('./routes');

const server = new Hapi.Server({
  port: 3000,
  host: 'localhost',
});

server.route(routes);
if (!module.parent) {
  server.start();
}
console.log('Server started successfully at', `${server.info.uri}`);
module.exports = server;
