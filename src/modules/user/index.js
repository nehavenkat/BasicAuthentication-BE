const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

//https://www.npmjs.com/package/passport-local-mongoose

const UserSchema = new mongoose.Schema({
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
  //username from passportlocalmongoose
  //passwordhash from passportlocalmongoose
  //salt from passportlocalmongoose
  //you are free to add whatever field you have in mind for your document!!!
});
User.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
