const express=require('express')
const authController=require('./controller/authController')
const jwtMiddleware = require('./middlewares/jwtMiddleware')
const  bookController  = require('./controller/bookController')
const multerConfig = require('./middlewares/multerMiddleware')

const userController=require('./controller/userController')
const jwtAdminMidlleware = require('./middlewares/jwtAdminMidlleware')

const jobController=require('./controller/jobController')



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

router.get('/userdetails',jwtMiddleware,userController.getUserDetails)

router.patch('/:id/updateProfile',jwtMiddleware,multerConfig.single('proPic'),userController.updateProfile)

router.get('/AllUsers',jwtAdminMidlleware,userController.getAllUsers)



router.post('/addJob',jwtAdminMidlleware,jobController.addjob)
router.get('/getAllJobs',jobController.getJobs)


router.delete('/:id/deleteJob',jwtAdminMidlleware,jobController.deleteJob)

module.exports=router
