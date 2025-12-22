const userModel = require("../model/userModel");

exports.getUserDetails=async(req,res)=>{
    try {

        
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'something went wrong'})
    }
}