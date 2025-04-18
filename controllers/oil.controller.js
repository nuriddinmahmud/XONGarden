import {
  createOilValidation,
  updateOilValidation,
} from "../validations/oil.joi.js";

import Oil from "../models/oil.model.js";

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

    const oil = await Oil.create({
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
    const oils = await Oil.findMany({
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

    const oil = await Oil.findUnique({ where: { id } });

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

    const existing = await Oil.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Oil record not found.",
        data: null,
      });
    }

    const updated = await Oil.update({
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

    const existing = await Oil.findUnique({ where: { id } });
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
