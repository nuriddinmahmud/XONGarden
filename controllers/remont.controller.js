import {
  createRemontValidation,
  updateRemontValidation,
} from "../validations/remont.joi.js";

export const createRemont = async (req, res) => {
  try {
    const { error } = createRemontValidation.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
        data: null,
      });
    }

    const remont = await remont.create({
      data: req.body,
    });

    res.status(201).json({
      success: true,
      message: "Remont record created successfully.",
      data: remont,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const getAllRemonts = async (req, res) => {
  try {
    const remonts = await prisma.remont.findMany({
      orderBy: { date: "desc" },
    });

    res.status(200).json({
      success: true,
      message: "All remont records fetched successfully.",
      data: remonts,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const getRemontById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const remont = await prisma.remont.findUnique({ where: { id } });

    if (!remont) {
      return res.status(404).json({
        success: false,
        message: "Remont record not found.",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Remont record fetched successfully.",
      data: remont,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

export const updateRemont = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const { error } = updateRemontValidation.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
        data: null,
      });
    }

    const existing = await prisma.remont.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Remont record not found.",
        data: null,
      });
    }

    const updated = await prisma.remont.update({
      where: { id },
      data: req.body,
    });

    res.status(200).json({
      success: true,
      message: "Remont record updated successfully.",
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

export const deleteRemont = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const existing = await prisma.remont.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Remont record not found.",
        data: null,
      });
    }

    await prisma.remont.delete({ where: { id } });

    res.status(200).json({
      success: true,
      message: "Remont record deleted successfully.",
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
