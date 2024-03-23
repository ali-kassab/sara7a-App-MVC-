import express from 'express'
import { messageController } from './message.controller.js';

export const messageRouter = express.Router()


messageRouter.get('/message', messageController)