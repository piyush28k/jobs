import express from 'express'
import { getJobs } from '../controller/Jobs.controller.js'

const router = express.Router()
  
router.get("/",getJobs)

export default router