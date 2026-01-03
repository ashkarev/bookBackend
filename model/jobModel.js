const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  jobId: {
    type: String,
    required: true,
    unique: true,
  },
  jobRole: {
    type: String,
    required: true,
    unique: true,
  },
  jobDesc: {
    type: String,
    required: true,
    unique: true,
  },
  jobDate: {
    type: String,
    required: true,
    unique: true,
  },
  lastDate: {
    type: String,
    required: true,
    unique: true,
  },
  salary: {
    type: String,
    required: true,
    
  },
  experience: {
    type: String,
    required: true,
   
  },
});


const jobModel=new mongoose.model('jobs',jobSchema)


module.exports=jobModel
