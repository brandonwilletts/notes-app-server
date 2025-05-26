import dotenv from 'dotenv';
import data_dev from '../data/db.development';
import data_prod from '../data/db.production';
import data_test from '../data/db.testing';

dotenv.config({
	path: `./src/env/.env.${process.env.NODE_ENV}`
});

const DATABASE_NAME = process.env.DATABASE_NAME;

const getData = () => {
	switch (process.env.NODE_ENV) {
		case 'development':
			return data_dev;
		case 'production':
			return data_prod;
		case 'testing':
			return data_test;
		default:
			return data_dev;
	}
};

const PORT = 3000;

export default { DATABASE_NAME, PORT, getData };