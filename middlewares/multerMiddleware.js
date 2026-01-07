const multer = require("multer");

const storage = multer.diskStorage({
  //used for storage
  destination: (req, file, callBack) => {
    callBack(null, "./uploads");
  },

  //modifyy fileName

  filename: (req, file, callBack) => {
    let date = Date.now();
    callBack(null, `bookstore-${date}-${file.originalname}`);
  },
});
//filter image
const fileFilter = (req, file, callBack) => {
  if (
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpeg" ||
    file.mimetype == "image/jpg"
  ) {
    
    //proceed
    callBack(null, true);
  } else {
    callBack(null, false);
  }
};

const multerConfig = multer({ storage, fileFilter });

module.exports = multerConfig;
