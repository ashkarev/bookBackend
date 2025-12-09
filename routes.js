const express=require('express')
const authController=require('./controller/authController')

const router=new express.Router()


router.post('/registerUser',authController.registerUser)

router.post('/loginUser',authController.loginUser)


router.post('/googleLogin',authController.googleLoginApi)

module.exports=router
