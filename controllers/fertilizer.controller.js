import {
  createFertilizerValidation,
  updateFertilizerValidation,
} from "../validations/fertilizer.joi.js";

import Fertilizer from "../models/fertilizer.model.js";

export const createFertilizer = async (req, res) => {
  try {
    const { error } = createFertilizerValidation.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
        data: null,
      });
    }

    const fertilizer = await Fertilizer.create({
      data: req.body,
    });

    res.status(201).json({
      success: true,
      message: "Fertilizer record created successfully.",
      data: fertilizer,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const getAllFertilizers = async (req, res) => {
  try {
    const fertilizers = await Fertilizer.findMany({
      orderBy: { date: "desc" },
    });

    res.status(200).json({
      success: true,
      message: "All fertilizer records fetched successfully.",
      data: fertilizers,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const getFertilizerById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const fertilizer = await Fertilizer.findUnique({
      where: { id },
    });

    if (!fertilizer) {
      return res.status(404).json({
        success: false,
        message: "Fertilizer record not found.",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Fertilizer record fetched successfully.",
      data: fertilizer,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const updateFertilizer = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const { error } = updateFertilizerValidation.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
        data: null,
      });
    }

    const existing = await Fertilizer.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Fertilizer record not found.",
        data: null,
      });
    }

    const updated = await Fertilizer.update({
      where: { id },
      data: req.body,
    });

    res.status(200).json({
      success: true,
      message: "Fertilizer record updated successfully.",
      data: updated,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const deleteFertilizer = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const existing = await Fertilizer.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Fertilizer record not found.",
        data: null,
      });
    }

    await Fertilizer.delete({ where: { id } });

    res.status(200).json({
      success: true,
      message: "Fertilizer record deleted successfully.",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};
