"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({
    path: path_1.default.resolve(process.cwd(), `.env.${process.env.NODE_ENV || 'development'}`)
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
if (!process.env.POSTGRES_PORT) {
    throw new Error('POSTGRES_PORT is not defined');
}
const POSTGRES_USER = process.env.POSTGRES_USER;
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
const POSTGRES_DB = process.env.POSTGRES_DB;
const POSTGRES_PORT = Number(process.env.POSTGRES_PORT || 5432);
const MODE = process.env.MODE;
const PORT = 3000;
exports.default = {
    PORT,
    MODE,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_DB,
    POSTGRES_PORT
};
