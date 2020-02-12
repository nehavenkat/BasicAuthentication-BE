const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

//https://www.npmjs.com/package/passport-local-mongoose

const User = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String
  },
  email: {
    type: String
  },
  role: {
    type: String,
    required: true
  }
});
