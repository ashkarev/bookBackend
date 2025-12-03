const mongoose=require('mongoose')

 mongoose.connect('mongodb+srv://ashkar:ashkar@cluster0.uo2l1qf.mongodb.net/?appName=Cluster0').then((res)=>{
    console.log('connected to mongoDB')
 }).catch((err)=>{
    console.log(err)
 }) 