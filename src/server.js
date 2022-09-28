"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
// const express = require("express");
const candidateRouter = require("./routes/candidate.routes");
const resultsRouter = require("./routes/results.routes");
const PORT = process.env.PORT || 3000;
const server = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use((req, res, next) => {
        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET');
        res.append('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });
    app.get("/", (req, res) => {
        res.send("Bot is ready to work!");
    });
    app.use("/api", candidateRouter, resultsRouter);
    app.listen(PORT, () => console.log(`server start at port ${PORT}, link: http://localhost:${PORT}`));
};
exports.server = server;
// module.exports = server
