import prisma from "../config/database.js";
import {
  createOilValidation,
  updateOilValidation,
} from "../validations/oil.joi.js";

export const createOil = async (req, res) => {
  try {
    const { error } = createOilValidation.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
        data: null,
      });
    }

    const oil = await prisma.oil.create({
      data: req.body,
    });

    res.status(201).json({
      success: true,
      message: "Oil record created successfully.",
      data: oil,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const getAllOils = async (req, res) => {
  try {
    const oils = await prisma.oil.findMany({
      orderBy: { date: "desc" },
    });

    res.status(200).json({
      success: true,
      message: "All oil records fetched successfully.",
      data: oils,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const getOilById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const oil = await prisma.oil.findUnique({ where: { id } });

    if (!oil) {
      return res.status(404).json({
        success: false,
        message: "Oil record not found.",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Oil record fetched successfully.",
      data: oil,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const updateOil = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const { error } = updateOilValidation.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
        data: null,
      });
    }

    const existing = await prisma.oil.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Oil record not found.",
        data: null,
      });
    }

    const updated = await prisma.oil.update({
      where: { id },
      data: req.body,
    });

    res.status(200).json({
      success: true,
      message: "Oil record updated successfully.",
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

export const deleteOil = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const existing = await prisma.oil.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Oil record not found.",
        data: null,
      });
    }

    await prisma.oil.delete({ where: { id } });

    res.status(200).json({
      success: true,
      message: "Oil record deleted successfully.",
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
