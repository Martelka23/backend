import { Router } from "express";

import TestController from "@/controllers/test.controller";
import { validate } from "@/router/middlewares/validator.middleware";
import { testCreateSchema } from "@/router/schemas/test.schema";


const testRouter = Router();
const testController = new TestController();

testRouter.get('/hello', testController.getAll);
testRouter.post('/world', validate(testCreateSchema), testController.create);

export { testRouter };