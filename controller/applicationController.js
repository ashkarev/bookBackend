const applicationModel = require("../model/applicationModel");

exports.ApplyJob = async (req, res) => {
  try {
    let { fullName, email, phone, jobId, jobTitle } = req.body;
    let resume = req.file.filename;

    let existingApplication = await applicationModel.findOne({ email, jobId });

    if (existingApplication) {
      res.status(409).json({ message: "already applied" });
    } else {
      let newApplication = new applicationModel({
        fullName,
        email,
        phone,
        jobId,
        jobTitle,
        resume,
      }); 
      await newApplication.save();
      res.status(201).json({ message: "successfully Saved", newApplication });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "some error" });
  }
};


exports.getJob=async(req,res)=>{
  try {

    let allApplications=await applicationModel.find()
    res.status(200).json(allApplications)
    
  } catch (error) {
     console.log(error);
    res.status(500).json({ message: "some error" });
  }
}
