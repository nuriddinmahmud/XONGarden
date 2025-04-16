import express from "express";
import {
  createWorker,
  getAllWorkers,
  getWorkerById,
  updateWorker,
  deleteWorker,
} from "../controllers/worker.controller.js";

const router = express.Router();

router.post("/", createWorker);
router.get("/", getAllWorkers);
router.get("/:id", getWorkerById);
router.patch("/:id", updateWorker); // PATCH ✅
router.delete("/:id", deleteWorker);

export default router;
