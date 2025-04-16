import e from "cors";
import Joi from "joi";

const createFertilizerValidation = Joi.object({
  date: Joi.date().iso().required(),
  fertilizerType: Joi.string().positive().required(),
  machineCount: Joi.string().positive().required(),
  tonAmount: Joi.number().positive().required(),
  comment: Joi.string().positive().required(),
});

const updateFertilizerValidation = Joi.object({
  date: Joi.date().iso().optional(),
  fertilizerType: Joi.string().positive().optional(),
  machineCount: Joi.string().positive().optional(),
  tonAmount: Joi.number().positive().optional(),
  comment: Joi.string().positive().optional(),
});

export { createFertilizerValidation, updateFertilizerValidation };

