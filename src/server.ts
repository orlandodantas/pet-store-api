import 'dotenv/config';
import express from 'express';
import { errorMiddleware } from './middlewares';
import { categoryRouter } from './routers';

const app = express();

app.use(express.json());

app
  .use('/categories', categoryRouter);

const PORT = Number(process.env.SERVER_PORT);

app.use(errorMiddleware);
app.listen(PORT, () => console.log(`Server online on port ${PORT}`));