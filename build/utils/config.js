"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const db_development_1 = __importDefault(require("../data/db.development"));
const db_production_1 = __importDefault(require("../data/db.production"));
const db_testing_1 = __importDefault(require("../data/db.testing"));
dotenv_1.default.config({
    path: `./src/env/.env.${process.env.NODE_ENV}`
});
const DATABASE_NAME = process.env.DATABASE_NAME;
const getData = () => {
    switch (process.env.NODE_ENV) {
        case 'development':
            return db_development_1.default;
        case 'production':
            return db_production_1.default;
        case 'testing':
            return db_testing_1.default;
        default:
            return db_development_1.default;
    }
};
const PORT = 3000;
exports.default = { DATABASE_NAME, PORT, getData };
