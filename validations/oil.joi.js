import Joi from "joi";

const createOilValidation = Joi.object({
  date: Joi.date().iso().required(),
  price: Joi.number().positive().required(),
  comment: Joi.string().min(1).required(),
});

const updateOilValidation = Joi.object({
  date: Joi.date().iso().optional(),
  price: Joi.number().positive().optional(),
  comment: Joi.string().min(1).optional(),
});

export { createOilValidation, updateOilValidation };
