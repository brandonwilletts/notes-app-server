"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unknownEndpoint = (_req, res) => {
    res.status(404).send({ error: 'unknown endpoint' });
};
exports.default = unknownEndpoint;
