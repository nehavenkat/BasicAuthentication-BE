const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//connecting to mongo

mongoose.connect(
  "mongodb://127.0.0.1:27017/basicAuth",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => console.log(err || "mongo connected")
);

const server = express();
server.use(cors());
server.use(express.json());

server.listen(process.env.PORT || 3000, () => console.log("server is running"));
