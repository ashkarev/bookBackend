const express=require('express')
const authController=require('./controller/authController')

const router=new express.Router()


router.post('/registerUser',authController.registerUser)



module.exports=router
