const express=require('express')
const authController=require('./controller/authController')
const jwtMiddleware = require('./middlewares/jwtMiddleware')
const  bookController  = require('./controller/bookController')
const multerConfig = require('./middlewares/multerMiddleware')



const router=new express.Router()


router.post('/registerUser',authController.registerUser)

router.post('/loginUser',authController.loginUser)


router.post('/googleLogin',authController.googleLoginApi)


router.post('/addBook',jwtMiddleware,multerConfig.array('uploadedImages'),bookController.AddBookController)

//array for multiple images
//single for one image


router.get('/getAllBooks',jwtMiddleware,bookController.getAllBookController)

router.get('/getSixBooks',bookController.getSixBookController)


router.get('/getSingleBook/:id',jwtMiddleware,bookController.getSingleBookController)



module.exports=router
