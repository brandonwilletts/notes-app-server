import express from 'express';
import cors from 'cors';
import config from './utils/config';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/ping', (_req, res) => {
	console.log('someone pinged here');
	res.send('pong');
});

app.get('/api/test', (_req, res) => {
	res.send(config.getData());
});

export default app;