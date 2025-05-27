import app from './app';
import config from './utils/config';
import logger from './utils/logger';

app.listen(config.PORT, () => {
	logger.info(`Server running on port ${config.PORT} in ${config.MODE} mode`);
	logger.info(`NODE_ENV: ${process.env.NODE_ENV}`);
});