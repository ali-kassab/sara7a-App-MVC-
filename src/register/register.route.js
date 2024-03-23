import express from 'express'
import { handelRegister, registerController } from './register.controller.js'
import { validation } from '../../middleware/validation.js'
import { signUp } from '../../middleware/schema.js'

export const registerRouter = express.Router()


registerRouter.get('/register', registerController)
registerRouter.post('/handelRegister', validation(signUp), handelRegister)