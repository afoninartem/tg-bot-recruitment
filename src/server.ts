import express from "express";
import { Request, Response } from "express";
// const express = require("express");
const candidateRouter = require("./routes/candidate.routes")
const resultsRouter = require("./routes/results.routes")
const PORT = process.env.PORT || 3000

export const server = () => {
  const app = express();
  app.use(express.json())
  app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
  app.get("/", (req: Request, res: Response) => {
    res.send("Bot is ready to work!")
  })

  app.use("/api", candidateRouter, resultsRouter)

  app.listen(PORT, () => console.log(`server start at port ${PORT}, link: http://localhost:${PORT}`))
}

// module.exports = server