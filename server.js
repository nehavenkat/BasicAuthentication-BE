const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// connectting the (routes\auth)routes to server r1
const authRouter = require("./src/routes/auth");
//connecting the utils/auth to server a1
const { authorise } = require("./src/utils");

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
// IN POSTMAN http://localhost:3000/register/register
server.use("/register", authRouter); //r2
//
server.get("/users", authorise, (req, res) => {
  res.send("You are Authorised!"); //a2
});

server.listen(process.env.PORT || 3000, () => console.log("server is running"));
