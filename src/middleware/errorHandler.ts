import { ErrorRequestHandler } from 'express';
import logger from '../utils/logger';

const errorHandler: ErrorRequestHandler = (error: Error, _req, res, next) => {
	logger.error(error.message);
	if (error.name === 'ValidationError') {
		res.status(400).json({ error: error.message });
		return;
	}
	next(error);
};

export default errorHandler;