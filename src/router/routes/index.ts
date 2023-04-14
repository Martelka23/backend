import ApiError from "@/utils/exceptions/apiError";
import { Router } from "express";

import { testRouter } from "./protected/test.router";


const rootRouter = Router();

rootRouter.use('/protected/test', testRouter);

rootRouter.use('*', (req, res) => {
    console.log(404);
    throw ApiError.NotFound();
});

export { rootRouter };