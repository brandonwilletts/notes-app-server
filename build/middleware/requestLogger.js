"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../utils/logger"));
const requestLogger = (req, _res, next) => {
    logger_1.default.info('Method: ', req.method);
    logger_1.default.info('Path:   ', req.path);
    logger_1.default.info('Body:   ', req.body);
    logger_1.default.info('---');
    next();
};
exports.default = requestLogger;
