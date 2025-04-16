import express from "express";
import {
  createFertilizer,
  getAllFertilizers,
  getFertilizerById,
  updateFertilizer,
  deleteFertilizer,
} from "../controllers/fertilizer.controller.js";

const router = express.Router();

router.post("/", createFertilizer);
router.get("/", getAllFertilizers);
router.get("/:id", getFertilizerById);
router.patch("/:id", updateFertilizer); 
router.delete("/:id", deleteFertilizer);

export default router;
