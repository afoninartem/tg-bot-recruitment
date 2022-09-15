import { Router } from "express";
const router: Router = Router();
const ResultsController = require("../controllers/results.controller");

router.get("/results", ResultsController.getResultsByID)

module.exports = router