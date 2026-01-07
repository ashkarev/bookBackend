const applicationModel = require("../model/applicationModel");

exports.ApplyJob = async (req, res) => {
  try {
    let { fullName, email, phoneNumber, jobId, jobTitle } = req.body;
    let resume = req.file.filename;

    let existingApplication = await applicationModel.findOne({ email, jobId });

    if (existingApplication) {
      res.status(409).json({ message: "already applied" });
    } else {
      let newApplication = new applicationModel({
        fullName,
        email,
        phoneNumber,
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
