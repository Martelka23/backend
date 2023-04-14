import axios from "axios";
import { NextFunction, Request, Response } from "express";
import ControllerErrorHandler from "./tools/controllerErrorHandler";

class TestController {
    @ControllerErrorHandler()
    async getAll(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log('Data length: ', response.data.length);
        return res.status(201).json(response.data);

    }

    @ControllerErrorHandler()
    async create(req: Request, res: Response, next: NextFunction): Promise<Response> {
        console.log(req.body);

        return res.status(201).json(req.body);
    }
}

export default TestController;