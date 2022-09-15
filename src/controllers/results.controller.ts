import { Request, Response } from "express"
import { pool as db } from "../db/db";
class ResultsController {
  async getResultsByID(req: Request, res: Response) {
    const id = req.query.id
    const results = await db.query(`select * from results where candidate_id=$1`, [id])
    res.json(results.rows)
  }
}

module.exports = new ResultsController()