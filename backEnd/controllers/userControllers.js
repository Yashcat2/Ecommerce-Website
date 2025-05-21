import validator from "validator";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js";


const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET )
}

// Route for user login
const loginUser = async (req,res) => {

    try {
        
        const {email,password} = req.body;

        //user is available
        const user = await userModel.findOne({email});

        //if not available
        if(!user){
            return res.json({success:false,message:"User Does Not Exist"})

        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch){
            const token = createToken(user._id);
            res.json({success:true,token})

        }
        else{
            res.json({success:false,message:"Invalid Credential"})
        }

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
        
    }

}


//Route for user registration
const registerUser = async (req,res) => {

    try {
        
        const {name,email,password} = req.body;

        //checking user already exists
        const exist = await userModel.findOne({email});
        if(exist){
            return res.json({success:false,message:"User Already Exist"})
        }

        // validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({success:false,message:"Please Enter a Valid Email"})
            
        }

        if (password.length < 8) {
            return res.json({success:false,message:"Please Enter a Strong Password"})
            
        }

        //hashing user pAssword
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        //create the user
        const newUser = new userModel({
            name,
            email,
            password:hashedPassword,
        })

        //store new user in the db
        const user = await newUser.save()

        //whenever the user will created one id will created using the id tkken  will be ccreatd
        const token = createToken(user._id)

        res.json({success:true,token})


        

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
        
    }
}

//Route for admin login
const adminLogin = async (req,res) => {

    try {
        
        const {email,password} = req.body;

        if (email == process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {

            const token = jwt.sign(email+password,process.env.JWT_SECRET);
            res.json({success:true,token})

        }else{
            res.json({success:false,message:"Invalid Credential"})

        }


    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }

}


export  {loginUser,registerUser,adminLogin}