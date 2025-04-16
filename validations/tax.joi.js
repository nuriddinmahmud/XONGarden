import Joi, { date } from "joi";

const createTaxValidation = Joi.object({
    date: Joi.date().iso().required(),
    amountPaid: Joi.number().positive().required(),
    comment: Joi.string().positive().required(),
}); 

const updateTaxValidation = Joi.object({
    date: Joi.date().iso().optional(),
    amountPaid: Joi.number().positive().optional(),
    comment: Joi.string().positive().optional(),
});

export { createTaxValidation, updateTaxValidation };