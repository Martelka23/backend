import * as express from 'express';

import { errorMiddleware, rootRouter, successMiddleware } from './router';


const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use(rootRouter);
app.use(successMiddleware);
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}...`);
});