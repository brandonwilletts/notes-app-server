import express from 'express';
import cors from 'cors';
import requestLogger from './middleware/requestLogger';
import unknownEndpoint from './middleware/unknownEndpoint';
import errorHandler from './middleware/errorHandler';
import { Sequelize } from 'sequelize';
import logger from './utils/logger';
import config from './utils/config';

const app = express();

app.use(express.json());
app.use(cors());
app.use(requestLogger);

const sequelize = new Sequelize(
	config.POSTGRES_DB,
	config.POSTGRES_USER,
	config.POSTGRES_PASSWORD,
	{
		host: 'localhost',
		dialect: 'postgres'
	}
);

app.get('/ping', async (_req, res) => {
	try {
		await sequelize.authenticate();
		logger.info(`Connection to ${config.POSTGRES_DB} has been established successfully`);
		res.status(200).send("DB connection successful");
	} catch (error) {
		logger.error(`Unable to connect to ${config.POSTGRES_DB}:`, error);
		res.status(500).send("DB connection failed");
	}
});

app.use(unknownEndpoint);
app.use(errorHandler);

export default app;