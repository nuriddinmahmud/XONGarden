import Joi, { date } from "joi";

const createWorkerValidation = Joi.object({
    date: Joi.date().iso().required(),
    workerCount: Joi.number().positive().required(),
    salaryPerOne: Joi.number().positive().required(),
    totalSalary: Joi.number().positive(),
    comment: Joi.string().positive().required()
});

const updateWorkerValidation = Joi.object({
    date: Joi.date().iso().optional(),
    workerCount: Joi.number().positive().optional(),
    salaryPerOne: Joi.number().positive().optional(),
    totalSalary: Joi.number().positive(),
    comment: Joi.string().positive().optional()
});

export { createWorkerValidation, updateWorkerValidation };