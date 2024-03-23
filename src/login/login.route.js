import express from 'express'
import { handelLogin, loginController } from './login.controller.js'
import { validation } from '../../middleware/validation.js'
import { login } from '../../middleware/schema.js'


export const loginRouter = express.Router()


loginRouter.get('/login', loginController)
loginRouter.post('/handelLogin', validation(login),handelLogin)