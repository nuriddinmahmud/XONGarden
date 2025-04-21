import Joi from "joi";

const createFertilizerValidation = Joi.object({
  date: Joi.date().iso().required(),
  fertilizerType: Joi.string().min(1).required(),
  machineCount: Joi.string().min(1).required(),
  tonAmount: Joi.number().positive().required(),
  comment: Joi.string().min(1).required(),
});

const updateFertilizerValidation = Joi.object({
  date: Joi.date().iso().optional(),
  fertilizerType: Joi.string().min(1).optional(),
  machineCount: Joi.string().min(1).optional(),
  tonAmount: Joi.number().positive().optional(),
  comment: Joi.string().min(1).optional(),
});

export { createFertilizerValidation, updateFertilizerValidation };
