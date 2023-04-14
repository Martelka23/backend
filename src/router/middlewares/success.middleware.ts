import { NextFunction, Request, Response } from "express";

import { logSuccess } from "@/utils/Logger/logger";


function successMiddleware(req: Request, res: Response, next: NextFunction) {
    const { originalUrl, method: httpMethod } = req;
    const { statusCode } = res;

    // console.log(res);
    // console.log('res log', res.locals.log);
    console.log('success');


    res.locals.log && logSuccess({ originalUrl, httpMethod, statusCode });

    // return res.status(statusCode).json({ a: 123 });
}

export { successMiddleware };