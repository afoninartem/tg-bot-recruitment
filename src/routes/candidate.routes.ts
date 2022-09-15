import { Router } from "express";
const router: Router = Router();
const candidateController = require("../controllers/candidate.controller");

router.post("/candidate", candidateController.createCandidate)
router.get("/candidates", candidateController.getAllCandidates)
router.get("/candidate/:id", candidateController.getOneCandidate)
router.put("/candidate", candidateController.updateCandidate)
router.delete("/candidate", candidateController.deleteCandidate)

module.exports = router