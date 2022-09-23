"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setResultInDB = exports.updateOldCandidateResult = exports.setNewCandidateResult = void 0;
const db_1 = require("../db/db");
const setNewCandidateResult = (result) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.pool.query(`INSERT INTO candidates (phone, chat_id) values ($1, $2) RETURNING *`, [result.phone, result.chat_id]);
    const candidate = yield db_1.pool.query(`SELECT * FROM candidates WHERE phone=$1`, [result.phone]);
    yield db_1.pool.query(`INSERT INTO results (test, results, test_date, candidate_id) values ($1, $2, $3, $4) RETURNING *`, [result.test, JSON.stringify(result.statistics), result.datetime, candidate.rows[0].id]);
});
exports.setNewCandidateResult = setNewCandidateResult;
const updateOldCandidateResult = (result, id) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.pool.query(`INSERT INTO results (test, results, test_date, candidate_id) values ($1, $2, $3, $4) RETURNING *`, [result.test, JSON.stringify(result.statistics), result.datetime, id]);
});
exports.updateOldCandidateResult = updateOldCandidateResult;
const setResultInDB = (result) => __awaiter(void 0, void 0, void 0, function* () {
    const alreadyTested = yield db_1.pool.query("SELECT * FROM candidates WHERE phone=$1", [result.phone]);
    alreadyTested.rows.length
        ? (0, exports.updateOldCandidateResult)(result, alreadyTested.rows[0].id)
        : (0, exports.setNewCandidateResult)(result);
});
exports.setResultInDB = setResultInDB;
