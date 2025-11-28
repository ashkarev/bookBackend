const express = require("express");
const cors = require("cors");
const router = require("./routes");

const server = new express();

const PORT = 3000;

//midlleware to allow rrsource sharing btwn origins
server.use(cors());

//midlleWare to parse
server.use(express.json());

server.use(router);

server.listen(PORT, () => {
  console.log(PORT);
});
