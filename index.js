const express = require("express");

const server = new express();

const PORT = 3000;

//midlleWare to parse
server.use(express.json());

server.get("/getDetails", (req, res) => {
  res.status(200).json({ message: "recived" });
});

server.listen(PORT, () => {
  console.log(PORT);
});
