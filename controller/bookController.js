const bookModel = require("../model/bookModel");

exports.AddBookController = async (req, res) => {
  try {
    let {
      title,
      author,
      noOfPage,
      imgUrl,
      price,
      discountPrice,
      abstract,
      publisher,
      language,
      ISBN,
      category,
      uploadedImages,
    } = req.body;

    //userMail comes from the token
    let userMail = req.user;

    if (
      title &&
      author &&
      noOfPage &&
      imgUrl &&
      price &&
      discountPrice &&
      abstract &&
      publisher &&
      language &&
      ISBN &&
      category &&
      uploadedImages
    ) {
      let existingUser = await bookModel.findOne({ title: title });
      if (existingUser) {
        //error
        res.status(409).json({ message: "books already there" });
      } else {
        //proceed

        let newBook=new bookModel({
            title,
      author,
      noOfPage,
      imgUrl,
      price,
      discountPrice,
      abstract,
      publisher,
      language,
      ISBN,
      category,
      uploadedImages,userMail

        })
      }
    } else {
      res.status(500).json({ message: "Fields are empty" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "some issue happen in server" });
  }
};
