import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
	path: path.resolve(process.cwd(), '.env.' + (process.env.NODE_ENV || 'development'))
});

if (!process.env.POSTGRES_USER) {
	throw new Error('POSTGRES_USER is not defined');
}

if (!process.env.POSTGRES_PASSWORD) {
	throw new Error('POSTGRES_PASSWORD is not defined');
}

if (!process.env.POSTGRES_DB) {
	throw new Error('POSTGRES_DB is not defined');
}

const POSTGRES_USER = process.env.POSTGRES_USER;
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
const POSTGRES_DB = process.env.POSTGRES_DB;

const MODE = process.env.MODE;
const PORT = 3000;

export default {
	PORT,
	MODE,
	POSTGRES_USER,
	POSTGRES_PASSWORD,
	POSTGRES_DB,
};