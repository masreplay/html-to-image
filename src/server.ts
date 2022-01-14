import express from 'express';
import { app } from './app';

// Start listening
const expressServer = app.listen(3000, () => {
  console.log(`App listening on http://localhost:${3000}/`);
});

export { express };
