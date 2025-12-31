const userModel = require("../model/userModel");

exports.getUserDetails = async (req, res) => {
  try {
    let email = req.user;

    let userDetails = await userModel.findOne({ email: email });
    res.status(200).json(userDetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    let {id} = req.params;
    //params to identify each persons

    let { userName, password, bioDescription } = req.body;

    let proPic = req.file.filename;

    let userDetails = await userModel.findByIdAndUpdate(
      { _id: id },
      { userName, password, bioDescription, proPic },
      { new: true }
    );

    res.status(200).json({ message: "updated successfully", userDetails });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "somwthing wetn wrong" });
  }
};

exports.getAllUsers=async(req,res)=>{
try {

  let allUsers=await userModel.find({userType:{$ne:'admin'}}).select('-password')
  res.status(200).json({allUsers})


  
} catch (error) {
  console.log(error);
    res.status(500).json({ message: "somwthing wetn wrong" });
}
}
