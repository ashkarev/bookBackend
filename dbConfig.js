const mongoose=require('mongoose')



//also add the  proj cluster name
 mongoose.connect(process.env.connectionString).then((res)=>{
    console.log('connected to mongoDB')
 }).catch((err)=>{
    console.log(err)
 }) 