const express=require('express')
const authController=require('./controller/authController')
const jwtMiddleware = require('./middlewares/jwtMiddleware')
const  bookController  = require('./controller/bookController')

const router=new express.Router()


router.post('/registerUser',authController.registerUser)

router.post('/loginUser',authController.loginUser)


router.post('/googleLogin',authController.googleLoginApi)


router.post('/addBook',jwtMiddleware,bookController.AddBookController)

module.exports=router
