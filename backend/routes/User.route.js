import express from 'express'
import {signin, login, getUser, apply} from '../controller/User.controller.js'

const router = express.Router()

router.post('/signin',signin)
router.post('/login',login)
router.post('/apply',apply)
router.get('/',getUser)


export default router