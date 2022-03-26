import express from 'express';
import compression from 'compression';
import morgan from 'morgan';
import router from './routers';

// Init the app
const app = express();

// Compress requests
app.use(compression());

// Parse incoming requests with JSON payload
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging
app.use(morgan('dev'));

app.use(router);

export { app };
