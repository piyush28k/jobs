import mongoose from "mongoose";

const jobsSchema = mongoose.Schema({
    name :String,
    salary : Number,
    img : String,
    role : String,
    location : String,
    discription : String,
    skills:Array
    
})

const jobs = mongoose.model('jobs', jobsSchema);
export default jobs
