import express from 'express';
import { app } from './app';
import { PORT } from './utils/config';

// Start listening
const expressServer = app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}/`);
});

export { express };
