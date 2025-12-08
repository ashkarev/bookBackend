const userModel = require("../model/userModel");


const jwt=require('jsonwebtoken')

exports.registerUser= async(req,res)=>{
    try {

        let userName=req.body.userName
        let password=req.body.password
        let email=req.body.email
        if(userName&&password&&email){
       //registration for login
        
       let existingUser=await userModel.findOne({email:email})
        if(existingUser){
            res.status(409).json({message:'user Already regiseterd'})
        }else{
            let newUser=new userModel({userName,email,password})
          await  newUser.save()
            res.status(201).json({message:' new user added',newUser})
        }

        }else{

            res.status(400).json({
                message:'please fill all'
            })
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Something Went Wrong in the Server'})
        console.log(error)
    }
}

//login logic

exports.loginUser=async(req,res)=>{
    try {

   let email=req.body.email
   let {password}=req.body


   let existingUser=await userModel.findOne({email:email})        
   if(existingUser){

    if(existingUser.password==password){

    //jwt token
    let payload={
        userName:existingUser.userName,
        email:existingUser.email,
        userType:existingUser.userType
    }

    let token= jwt.sign(payload,process.env.jwtSecretKey)



        res.status(200).json({message:'successfully  registerd',token})
    }else{
        res.status(400).json({message:'Invalid Passwrod'})
    }

   }else{
    res.status(400).json({message:'user with email dont exist'})
   }
    } catch (error) {
        console.log(error)
        res.status.json({message:'error occuredd in server'})
    }
}