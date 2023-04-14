import { NextFunction, Request, Response } from "express";


export type ControllerFunction = (req: Request, res: Response, next: NextFunction) => Promise<Response>;

export default function ControllerErrorHandler(log: boolean = true) {
    return (
        target: Object,
        _: string | symbol,
        descriptor: TypedPropertyDescriptor<ControllerFunction>
    ): TypedPropertyDescriptor<ControllerFunction> | void => {
        const method = descriptor.value;
        descriptor.value = async (req, res, next) => {
            console.log('request')
            let result: Response;

            res.locals.log = log;

            try {
                result = await method?.call(target, req, res, next);
                // next();
            } catch (err) {
                if (err instanceof Error) {
                    next(err);
                }
            }

            return result;
        };
    };
}