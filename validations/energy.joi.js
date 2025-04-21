import Joi from "joi";

const createEnergyValidation = Joi.object({
  date: Joi.date().iso().required(),
  amountPaid: Joi.number().positive().required(),
  comment: Joi.string().min(1).required(),
});

const updateEnergyValidation = Joi.object({
  date: Joi.date().iso().optional(),
  amountPaid: Joi.number().positive().optional(),
  comment: Joi.string().min(1).required(),
});

export { createEnergyValidation, updateEnergyValidation };
