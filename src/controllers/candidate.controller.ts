import { Request, Response } from "express"
import { pool as db } from "../db/db";
class CandidateController {
  async createCandidate(req: Request, res: Response) {
    const { phone } = req.body;
    const candidate = await db.query(`INSERT INTO candidates (phone, chat_id) values ($1, $2) RETURNING *`, [phone])
    res.json(candidate.rows[0])
  }
  async getAllCandidates(req: Request, res: Response) {
    const candidates = await db.query(`SELECT * FROM candidates`);
    res.json(candidates.rows)
  }
  async getOneCandidate(req: Request, res: Response) { }
  async updateCandidate(req: Request, res: Response) { }
  async deleteCandidate(req: Request, res: Response) { }
}

module.exports = new CandidateController()