// const express = require('express');we can import like this after ES6, by adding type:module in package.json
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'; 
import cors from 'cors'

import jobsRoute from './route/Jobs.route.js'
import userRoute from './route/User.route.js'

const app = express();
app.use(cors())
app.use(express.json()) // convert data into json that we send into DB.
dotenv.config()

const PORT = process.env.PORT || 4000
const URI = process.env.MongoDBURI

try {
    mongoose.connect(URI,{
        // useNewUrlParser:true,
        // useUnifiedTopology:true
    })
    console.log("connect to db")
} catch (error) {
    console.log("error occur"+error)
}

//defining routes
app.use('/jobs',jobsRoute) //this is an api for fetching data from DB
app.use('/user',userRoute)

app.listen(PORT,()=>{
    console.log(`listen on ${PORT}`)
})
