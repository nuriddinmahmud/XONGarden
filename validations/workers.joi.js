import Joi from "joi";

const createWorkerValidation = Joi.object({
  date: Joi.date().iso().required(),
  workerCount: Joi.number().positive().required(),
  salaryPerOne: Joi.number().positive().required(),
  totalSalary: Joi.number().positive().optional(), // optional lekin valid
  comment: Joi.string().min(1).required(),
});

const updateWorkerValidation = Joi.object({
  date: Joi.date().iso().optional(),
  workerCount: Joi.number().positive().optional(),
  salaryPerOne: Joi.number().positive().optional(),
  totalSalary: Joi.number().positive().optional(),
  comment: Joi.string().min(1).optional(),
});

export { createWorkerValidation, updateWorkerValidation };
