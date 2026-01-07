//import

//storage and

//filename

//filefilter validation-for any partiular file

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    let date = Date.now();
    callback(null, `bookstore-resume-${date}-${file.originalname}`);
  },
});

const filefilter = (req, file, callback) => {
  if (file.mimetype == "application/pdf") {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

const resumeMulterConfig = multer({ storage, fileFilter });

module.exports = resumeMulterConfig;
