'use strict';

const connect = require('connect');
const config = require('config');
const fiddleware = require('fiddleware');
const initializeSwagger = require('swagger-tools').initializeMiddleware;
const yamljs = require('yamljs');

const app = connect();
const controllerPath = config.get('api.controllerPath');
const listenPort = config.get('api.port');
const swaggerFilePath = config.get('api.swaggerFile');
const swaggerObject = yamljs.load(swaggerFilePath);

initializeSwagger(swaggerObject, (middleware) => {
  app.use(fiddleware.respondJson());
  app.use(middleware.swaggerMetadata());
  app.use(middleware.swaggerValidator());
  app.use(middleware.swaggerRouter({
    controllers: controllerPath,
  }));
  app.use(middleware.swaggerUi());
  app.use((error, req, res, next) => {
    res.json({
      message: error,
    }, 500);
    next();
  });
  const server = app.listen(listenPort);
  app.close = function closeServer() {
    server.close();
  };
});

module.exports = app;
