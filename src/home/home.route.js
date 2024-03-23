import express from 'express'
import { homeController } from './home.controller.js'

export const homeRouter = express.Router()


homeRouter.get('/',homeController)