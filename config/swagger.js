// config/swagger.js

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Book Management API',
      version: '1.0.0',
      description: 'API documentation for the Book Management system',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: [
    path.join(__dirname, '../docs/*.js'), // Adjust this if necessary
  ],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Export swaggerUi and swaggerDocs directly
module.exports = { swaggerUi, swaggerDocs };
