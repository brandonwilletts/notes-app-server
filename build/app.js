"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const requestLogger_1 = __importDefault(require("./middleware/requestLogger"));
const unknownEndpoint_1 = __importDefault(require("./middleware/unknownEndpoint"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const sequelize_1 = require("sequelize");
const logger_1 = __importDefault(require("./utils/logger"));
const config_1 = __importDefault(require("./utils/config"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(requestLogger_1.default);
const sequelize = new sequelize_1.Sequelize(config_1.default.POSTGRES_DB, config_1.default.POSTGRES_USER, config_1.default.POSTGRES_PASSWORD, {
    host: 'localhost',
    port: config_1.default.POSTGRES_PORT,
    dialect: 'postgres'
});
app.get('/ping', async (_req, res) => {
    try {
        await sequelize.authenticate();
        logger_1.default.info(`Connection to ${config_1.default.POSTGRES_DB} has been established successfully`);
        res.status(200).send("DB connection successful");
    }
    catch (error) {
        logger_1.default.error(`Unable to connect to ${config_1.default.POSTGRES_DB}:`, error);
        res.status(500).send("DB connection failed");
    }
});
app.use(unknownEndpoint_1.default);
app.use(errorHandler_1.default);
exports.default = app;
