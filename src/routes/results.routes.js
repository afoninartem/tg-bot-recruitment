"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const ResultsController = require("../controllers/results.controller");
router.get("/results", ResultsController.getResultsByID);
module.exports = router;
