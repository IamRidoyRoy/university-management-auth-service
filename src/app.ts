import express, { Application, urlencoded, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
import usersRouter from './apps/modules/users/users.route'

// parser
app.use(express.json())
app.use(urlencoded({ extended: true }))

// application routes
app.use('/api/v1/users/', usersRouter)

// Testing testing
app.use(cors())
app.get('/', async (req: Request, res: Response) => {
  res.send('Working Successfully')
})

export default app
