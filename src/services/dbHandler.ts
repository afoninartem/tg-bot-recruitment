import { pool as db } from "../db/db"

interface Result {
  chat_id: number | undefined,
  phone: string | undefined,
  test: string | undefined,
  datetime: string,
  ticket: string,
  statistics: { question: number, answerisCorrect: boolean, time: string }[] | []
}

export const setNewCandidateResult = async (result: Result) => {
  await db.query(`INSERT INTO candidates (phone, chat_id) values ($1, $2) RETURNING *`, [result.phone, result.chat_id])
  const candidate = await db.query(`SELECT * FROM candidates WHERE phone=$1`, [result.phone])
  await db.query(`INSERT INTO results (test, results, test_date, candidate_id) values ($1, $2, $3, $4) RETURNING *`, [result.test, JSON.stringify(result.statistics), result.datetime, candidate.rows[0].id])
}

export const updateOldCandidateResult = async (result: Result, id: number) => {
  await db.query(`INSERT INTO results (test, results, test_date, candidate_id) values ($1, $2, $3, $4) RETURNING *`, [result.test, JSON.stringify(result.statistics), result.datetime, id])
}

export const setResultInDB = async (result: Result) => {
  const alreadyTested = await db.query("SELECT * FROM candidates WHERE phone=$1", [result.phone]);
  alreadyTested.rows.length
    ? updateOldCandidateResult(result, alreadyTested.rows[0].id)
    : setNewCandidateResult(result)
}