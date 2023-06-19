const express = require('express');
const { router } = require('./routes');
const { notFound, errorHandler } = require('./middlewares');

const app = express();

app.use(express.json());

app.use(router);

app.use(notFound);

app.use(errorHandler);

module.exports = { app };
