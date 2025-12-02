const userModel = require("../model/userModel");

exports.registerUser= async(req,res)=>{
    try {

        let userName=req.body.userName
        let password=req.body.password
        let email=req.body.email
        if(userName&&password&&email){
       //registration for login
        
       let existingUser=await userModel.findOne({email:email})
        if(existingUser){
            res.status(409).json({message:'useer Already regiseterd'})
        }else{
            let newUser=new userModel({userName,email,password})
            newUser.save()
            res.status(201).json({message:' new user added',newUser})
        }

        }else{

            res.status(400).json({
                message:'please fill all'
            })
        }
        
    } catch (error) {
        res.status(500).json({message:'Something Went Wrong in the Server'})
    }
}