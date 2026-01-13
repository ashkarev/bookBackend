require('dotenv').config()

//the datya inside the .env can access the entire applicarion
require('./dbConfig')

const express = require("express");
const cors = require("cors");
const router = require("./routes");

const server = new express();

const PORT = 3000;

//midlleware to allow rrsource sharing btwn origins
server.use(cors());

//midlleWare to parse
server.use(express.json());

server.use('/uploads',express.static('./uploads'))  //this middleware used to share the resources

server.use(router);

server.listen(PORT, () => {
  console.log(PORT);
});
