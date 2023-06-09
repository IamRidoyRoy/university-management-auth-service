import express, { Application, urlencoded, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express();
const port = 3000

// parser 
app.use(express.json());
app.use(urlencoded({ extended: true }));

// Testing
app.use(cors());
app.get('/', (req: Request, res: Response) => {
    res.send('Working Successfully')
})

export default app;