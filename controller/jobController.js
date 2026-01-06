const jobModel = require("../model/adminJobModel");

exports.addjob = async (req, res) => {
  try {
    let { jobId, jobRole, jobDesc, jobDate, lastDate, salary, experience } =
      req.body;

    let newJob = new jobModel({
      jobId,
      jobRole,
      jobDesc,
      jobDate,
      lastDate,
      salary,
      experience,
    });

    await newJob.save();

    res.status(201).json({ message: "successfully Added", newJob });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};

exports.getJobs = async (req, res) => {
  try {
    let allJobs = await jobModel.find();
    res.status(200).json({ message: "successfully fetched", allJobs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};


exports.deleteJob=async(req,res)=>{
    try {

        let {id}=req.params
        let deletedJob=await jobModel.findByIdAndDelete({_id:id})
        res.status(200).json({message:'success deleted'})
        
    } catch (error) {
         console.log(error);
    res.status(500).json({ message: "something went wrong" });
    }
}