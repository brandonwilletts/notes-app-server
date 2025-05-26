import app from './app';
import config from './utils/config';

app.listen(config.PORT, () => {
	console.log(`Server running on port ${config.PORT}`);
	console.log(`Database: ${config.DATABASE_NAME}`);
});