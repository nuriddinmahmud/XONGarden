import express from "express";
import {
  createFood,
  getAllFoods,
  getFoodById,
  updateFood,
  deleteFood,
} from "../controllers/foods.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Food
 *   description: API for managing food expenses and records
 */

/**
 * @swagger
 * /api/foods:
 *   post:
 *     summary: Create a new food record
 *     tags: [Food]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - date
 *               - shopName
 *               - price
 *             properties:
 *               date:
 *                 type: string
 *                 format: date
 *                 example: 2025-04-18
 *               shopName:
 *                 type: string
 *                 example: "Makro"
 *               price:
 *                 type: integer
 *                 example: 120000
 *     responses:
 *       201:
 *         description: Food record created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Internal server error
 */
router.post("/", createFood);

/**
 * @swagger
 * /api/foods:
 *   get:
 *     summary: Get all food records
 *     tags: [Food]
 *     responses:
 *       200:
 *         description: List of all food records
 *       500:
 *         description: Internal server error
 */
router.get("/", getAllFoods);

/**
 * @swagger
 * /api/foods/{id}:
 *   get:
 *     summary: Get a food record by ID
 *     tags: [Food]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Food record ID
 *     responses:
 *       200:
 *         description: Food record fetched successfully
 *       404:
 *         description: Food record not found
 *       500:
 *         description: Internal server error
 */
router.get("/:id", getFoodById);

/**
 * @swagger
 * /api/foods/{id}:
 *   patch:
 *     summary: Update a food record
 *     tags: [Food]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Food record ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date:
 *                 type: string
 *                 format: date
 *                 example: 2025-04-20
 *               shopName:
 *                 type: string
 *                 example: "Korzinka"
 *               price:
 *                 type: integer
 *                 example: 95000
 *     responses:
 *       200:
 *         description: Food record updated successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: Food record not found
 *       500:
 *         description: Internal server error
 */
router.patch("/:id", updateFood);

/**
 * @swagger
 * /api/foods/{id}:
 *   delete:
 *     summary: Delete a food record
 *     tags: [Food]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Food record ID
 *     responses:
 *       200:
 *         description: Food record deleted successfully
 *       404:
 *         description: Food record not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:id", deleteFood);

export default router;
