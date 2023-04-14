import Joi from "joi";
import { Request } from "express";

import { JoiRequestSchema } from "../schemas/test.schema";


function validateSchema(schema: JoiRequestSchema, req: Request): string[] {
    const errors: Joi.ValidationErrorItem[] = [];

    // if (schema.headersSchema) {
    //     const { error } = schema.headersSchema.validate(req.headers, { abortEarly: false,  });
    //     errors.push(...error.details);
    // }

    if (schema.bodySchema) {
        const { error } = schema.bodySchema.validate(req.body, { abortEarly: false });
        const newErrors = error ? error.details : [];
        errors.push(...newErrors);
        console.log('body error', error)
    }

    const errorMessages: string[] = errors.map(error => error.message);

    return errorMessages;
}

export { validateSchema };