import Joi from "joi";
import { NextFunction, Request, Response } from "express";

import { validateSchema } from "../validator/validator";
import ApiError from "@/utils/exceptions/apiError";
import { JoiRequestSchema } from "../schemas/test.schema";


function validate(schema: JoiRequestSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const errors: string[] = validateSchema(schema, req);

        if (errors.length) {
            const err = ApiError.BadRequest('Validation error', errors);
            next(err);
        } else {
            next();
        }
    }
}

export { validate };