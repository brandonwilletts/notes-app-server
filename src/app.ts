import express from 'express';
import cors from 'cors';
import config from './utils/config';
import requestLogger from './middleware/requestLogger';
import unknownEndpoint from './middleware/unknownEndpoint';
import errorHandler from './middleware/errorHandler';

const app = express();

app.use(express.json());
app.use(cors());
app.use(requestLogger);
app.use(unknownEndpoint);
app.use(errorHandler);

app.get('/ping', (_req, res) => {
	console.log('someone pinged here');
	res.send('pong');
});

app.get('/api/test', (_req, res) => {
	res.send(config.getData());
});

export default app;