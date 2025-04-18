import prisma from "../config/database.js";
import {
  createFoodValidation,
  updateFoodValidation,
} from "../validations/foods.joi.js";

export const createFood = async (req, res) => {
  try {
    const { error } = createFoodValidation.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
        data: null,
      });
    }

    const food = await prisma.food.create({
      data: req.body,
    });

    res.status(201).json({
      success: true,
      message: "Food record created successfully.",
      data: food,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const getAllFoods = async (req, res) => {
  try {
    const foods = await prisma.food.findMany({
      orderBy: { date: "desc" },
    });

    res.status(200).json({
      success: true,
      message: "All food records fetched successfully.",
      data: foods,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const getFoodById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const food = await prisma.food.findUnique({ where: { id } });

    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food record not found.",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Food record fetched successfully.",
      data: food,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const updateFood = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const { error } = updateFoodValidation.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
        data: null,
      });
    }

    const existing = await prisma.food.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Food record not found.",
        data: null,
      });
    }

    const updated = await prisma.food.update({
      where: { id },
      data: req.body,
    });

    res.status(200).json({
      success: true,
      message: "Food record updated successfully.",
      data: updated,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const deleteFood = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const existing = await prisma.food.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Food record not found.",
        data: null,
      });
    }

    await prisma.food.delete({ where: { id } });

    res.status(200).json({
      success: true,
      message: "Food record deleted successfully.",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};
