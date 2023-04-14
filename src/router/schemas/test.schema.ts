import * as Joi from 'joi';

export interface JoiRequestSchema {
    headersSchema?: Joi.ObjectSchema;
    bodySchema?: Joi.ObjectSchema;
}

export const testCreateSchema: JoiRequestSchema = {
    headersSchema: Joi.object({
        myHeader: Joi.string().min(3).required()
    }),
    bodySchema: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(3).max(10).required()
    })
}