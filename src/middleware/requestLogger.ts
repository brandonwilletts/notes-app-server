import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

const requestLogger = (req: Request, _res: Response, next: NextFunction): void => {
	logger.info('Method: ', req.method);
	logger.info('Path:   ', req.path);
	logger.info('Body:   ', req.body);
	logger.info('---');
	next();
};

export default requestLogger;