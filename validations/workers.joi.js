import Joi from "joi";

const createWorkerValidation = Joi.object({
  date: Joi.date().iso().required(),
  workerCount: Joi.INTEGER().positive().required(),
  salaryPerOne: Joi.INTEGER().positive().required(),
  totalSalary: Joi.INTEGER().positive().optional(), // optional lekin valid
  comment: Joi.string().min(1).required(),
});

const updateWorkerValidation = Joi.object({
  date: Joi.date().iso().optional(),
  workerCount: Joi.INTEGER().positive().optional(),
  salaryPerOne: Joi.INTEGER().positive().optional(),
  totalSalary: Joi.INTEGER().positive().optional(),
  comment: Joi.string().min(1).optional(),
});

export { createWorkerValidation, updateWorkerValidation };
