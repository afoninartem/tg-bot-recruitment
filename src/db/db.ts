const Pool = require("pg").Pool
export const pool = new Pool({
  user: "postgres",
  password: "Argonaft969",
  host: "localhost",
  port: 5432,
  database: "artis_helper"
})



// module.exports = pool
