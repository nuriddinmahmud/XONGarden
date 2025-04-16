import Joi from "joi";

const createRemontValidation = Joi.object({
  date: Joi.date().iso().required(),
  price: Joi.number().positive().required(),
  comment: Joi.string().positive().required(),
});

const updateRemontValidation = Joi.object({
  date: Joi.date().iso().optional(),
  price: Joi.number().positive().optional(),
  comment: Joi.string().positive().optional(),
});

export { createRemontValidation, updateRemontValidation };