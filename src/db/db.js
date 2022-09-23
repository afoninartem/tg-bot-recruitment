"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const Pool = require("pg").Pool;
exports.pool = new Pool({
    user: "postgres",
    password: "Argonaft969",
    host: "localhost",
    port: 5432,
    database: "artis_helper"
});
// module.exports = pool
