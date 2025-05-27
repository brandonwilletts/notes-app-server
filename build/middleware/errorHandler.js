"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../utils/logger"));
const errorHandler = (error, _req, res, next) => {
    logger_1.default.error(error.message);
    if (error.name === 'ValidationError') {
        res.status(400).json({ error: error.message });
        return;
    }
    next(error);
};
exports.default = errorHandler;
