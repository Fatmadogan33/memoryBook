import * as Joi from "joi";

const schemas = {
    add: Joi.object().keys({
    title: Joi.string().min(3).max(100).required(),
    date: Joi.number().integer().optional(),
    memory: Joi.array().items(Joi.string().min(3).max(50).lowercase())
      .optional(),
    location: Joi.string().min(3).max(100).required(),
  }),
  get: Joi.object().keys({
  id: Joi.number().integer().min(1)
  }),
};

export default schemas;