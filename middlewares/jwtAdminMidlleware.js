const jwt = require("jsonwebtoken");

const jwtAdminMidlleware = (req, res, next) => {
  //token passses from FE  via req headers (postman we  can see)

  //we use bearer token here   so we neeed to remove bearer from the front
  let token = req.headers.authorization.split(" ")[1];

  try {
    if (token) {
      let decodedData = jwt.verify(token, process.env.jwtSecretKey);
      if (decodedData) {
        //next and update req
       
//this checking for addmin
         if(decodedData.userType=='admin'){

            req.user = decodedData.email;
        next();
        
        }
        else{
            res.status(403).json({message:"this can only done by admin "})
        }
      
      } else {
        res.status(401).json({ message: "in valid token" });
      }
    } else {
      res.status(401).json({ message: "token required pls login" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "issue happen  at validate token pls login" });
  }
};

module.exports = jwtAdminMidlleware;
