import Joi from "joi";

const createUserValidation = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(6).max(20).required(),
});

const updateUserValidation = Joi.object({
  name: Joi.string().min(3).max(30).optional(),
  password: Joi.string().min(6).max(20).optional(),
});

export { createUserValidation, updateUserValidation };
