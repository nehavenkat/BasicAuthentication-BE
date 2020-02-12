const express = require("express"); //1
//connecting to schema
const User = require("../../modules/user");

const router = express.Router(); //2

router.get("/", async (req, res) => {
  res.send(await User.find({}));
}); // get all users

router.post("/register", async (req, res) => {
  try {
    const user = await User.register(req.body, req.body.password);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
}); // new user registration

module.exports = router; //3
