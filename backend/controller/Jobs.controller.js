import jobs from '../models/Jobs.js'

export const getJobs = async(req,res)=>{
    try {
        const Jobs =  await jobs.find()
        res.status(200).json(Jobs)
    } catch (error) {
        console.log("error: " + error)
        res.status(500).json(error)
    }
}

