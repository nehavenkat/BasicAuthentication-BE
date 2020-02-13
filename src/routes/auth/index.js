const express = require("express"); //1
//connecting to schema
const User = require("../../modules/user");

const router = express.Router(); //2

router.get("/", async (req, res) => {
  res.send(await User.find({}));
}); // get all users
//INPOSTMAN http://localhost:3000/register

router.post("/register", async (req, res) => {
  try {
    const user = await User.register(req.body, req.body.password);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
}); // new user registration
//INPOSTMAN http://localhost:3000/register/register

module.exports = router; //3
