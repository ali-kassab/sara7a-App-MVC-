import express from 'express'
import { handelUser, userController } from './user.controller.js'

export const userRouter = express.Router()


userRouter.get('/user/:id', userController)
userRouter.post('/handelUser/:id', handelUser)