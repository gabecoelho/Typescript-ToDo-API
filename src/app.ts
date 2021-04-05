import express, { Request, Response, NextFunction} from 'express';
import todoRoutes from './routes/todos';
import { json } from 'body-parser';

const app = express();

app.use(json());

app.use((req: Request, res: Response, next: NextFunction) => {
	console.log(req.method);
	next();
})

app.use('/todos', todoRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	res.status(500).json({message: err.message});
});

app.listen(3000);
console.log('The server has started...');