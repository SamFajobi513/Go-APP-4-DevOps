import express, { Application } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
require('dotenv').config()
require('./database')
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json';
import agentRoute from './routes/agent.routes';
import adminRoute from './routes/admin.routes';
import superAdminRoute from './routes/superadmin.routes';
import userRoute from './routes/user.routes';

const api: string = '/api/v1'
const app: Application = express()
const PORT: any = process.env.PORT || 5120

app.use(morgan("combined"));
app.use(cors())
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ limit: '100mb', extended: false }));