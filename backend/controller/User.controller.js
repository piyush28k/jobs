import User from "../models/user.js";
import bcrypt from 'bcryptjs'

export const getUser = async(req,res)=>{
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        console.log("error: " + error)
        res.status(500).json(error)
    }
}

export const signin = async (req,res)=>{
    try {
        const{name,email,password} = req.body
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({meaasge:"user alredy exist"})
        }

        const hashPassword = await bcrypt.hash(password,10)
        const createUse = new User({
            name,
            email,
            password:hashPassword,
        })

        await createUse.save()
        res.status(201).json({message :"user created successfully" , user:{
            _id:createUse._id,
            name:createUse.name,
            email:createUse.email
        }})
        
        
    } catch (error) {
        console.log("error : "+ error.message)
        res.status(500).json({message:"internal server error"})
    }

}

export const login = async (req,res)=>{
    try {
        const {email,password} = req.body
        const user = await User.findOne({email})
        const isMatch = await bcrypt.compare(password,user.password)
        
        if(!user || !isMatch){
            res.status(400).json({message:"invalid user or password!"})
        }else{
            res.status(200).json({message:"login successful" , user:{
                _id:user._id,
                name:user.name,
                email:user.email
            }})
        }
    } catch (error) {
        console.log("error : "+ error.message)
        res.status(500).json({message:"internal server error"})
    }
}


export const apply = async (req, res) => {
    const { userId, jobId } = req.body;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.jobs.includes(jobId)) {
            return res.status(400).json({ message: "Job already applied" });
        }

        user.jobs.push(jobId);
        await user.save();
        res.status(200).json({ message: "Job added to user's applications", user });
        
    } catch (error) {
        console.error("Error applying for job:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
