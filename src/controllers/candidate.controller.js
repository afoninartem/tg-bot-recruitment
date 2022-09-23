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
const db_1 = require("../db/db");
class CandidateController {
    createCandidate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { phone } = req.body;
            const candidate = yield db_1.pool.query(`INSERT INTO candidates (phone, chat_id) values ($1, $2) RETURNING *`, [phone]);
            res.json(candidate.rows[0]);
        });
    }
    getAllCandidates(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const candidates = yield db_1.pool.query(`SELECT * FROM candidates`);
            res.json(candidates.rows);
        });
    }
    getOneCandidate(req, res) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    updateCandidate(req, res) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    deleteCandidate(req, res) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
module.exports = new CandidateController();
