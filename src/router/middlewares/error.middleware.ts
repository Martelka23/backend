import axios from "axios";
import { NextFunction, Request, Response } from "express";

import ApiError from "@/utils/exceptions/apiError";
import { logError } from "@/utils/Logger/logger";


interface ErrorResponseData {
    message: string;
    details: string[];
}

function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
    let responseStatus = 500;
    let responseData: ErrorResponseData = { message: 'Internal server error', details: [] };
    const { originalUrl, method: httpMethod } = req;

    if (err instanceof ApiError) {
        const { status, message, details } = err;
        responseStatus = status;
        responseData = { message, details };
    }

    if (axios.isAxiosError(err)) {
        responseStatus = err.response.status ?? 500;
        responseData.message = err.message ?? 'External server error';
    }

    res.locals.log && logError({ 
        originalUrl, 
        httpMethod, 
        statusCode: responseStatus, 
        message: responseData.message, 
        details: responseData.details
    });

    return res.status(responseStatus).json(responseData);
}

export { errorMiddleware };