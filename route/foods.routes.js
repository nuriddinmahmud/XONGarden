import express from "express";
import {
  createFood,
  getAllFoods,
  getFoodById,
  updateFood,
  deleteFood,
} from "../controllers/foods.controller.js";

const router = express.Router();

router.post("/", createFood);
router.get("/", getAllFoods);
router.get("/:id", getFoodById);       // ✅ noto‘g‘rilik yo‘q
router.patch("/:id", updateFood);
router.delete("/:id", deleteFood);

export default router;
