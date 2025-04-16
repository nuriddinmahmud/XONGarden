import express from "express";
import {
  createTax,
  getAllTaxes,
  getTaxById,
  updateTax,
  deleteTax,
} from "../controllers/tax.controller.js";

const router = express.Router();

router.post("/", createTax);
router.get("/", getAllTaxes);
router.get("/:id", getTaxById);
router.patch("/:id", updateTax); // PATCH ✅
router.delete("/:id", deleteTax);

export default router;
