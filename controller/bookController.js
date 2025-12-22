const bookModel = require("../model/bookModel");

exports.AddBookController = async (req, res) => {
  console.log(req.user);
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
      // uploadedImages,//0 that are uploaded only available at req.files
    } = req.body;

    let imageArray = [];
    req.files.forEach((eachFile) => imageArray.push(eachFile.filename));

    // console.log(files)

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
      category
      // uploadedImages
    ) {
      let existingUser = await bookModel.findOne({ title: title });
      if (existingUser) {
        //error
        res.status(409).json({ message: "books already there" });
      } else {
        //proceed

        let newBook = new bookModel({
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
          uploadedImages: imageArray,
          userMail,
        });
        await newBook.save();
        res.status(201).json({ message: "successfully Added", newBook });
      }
    } else {
      res.status(500).json({ message: "Fields are empty" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "some issue happen in server" });
  }
};

exports.getAllBookController = async (req, res) => {
  try {
    let searchKey = req.query.search;

    let query = {
      title: {
        $regex: searchKey,//for seatrchinng

        $options: "i",//case Sensitive
      },
    };

    let BookData = await bookModel.find(query);
    res.status(200).json({ message: "book fetched Successfully ", BookData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error happened" });
  }
};

exports.getSixBookController = async (req, res) => {
  try {
    let limitedBookData = await bookModel.find().limit(4);
    res
      .status(200)
      .json({ message: "succesfuly fetched six book", limitedBookData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error happened" });
  }
};

exports.getSingleBookController = async (req, res) => {
  try {
    let id = req.params.id;
    let SinglebookData = await bookModel.findById({ _id: id });
    res.status(200).json({ SinglebookData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error happened" });
  }
};
