//for using the basic authorization

const basic = require("express-basic-auth");
const User = require("../modules/user"); // connecting to schema

const checkCredentialsInMongo = async (username, password, next) => {
  const response = await User.authenticate()(username, password);
  next(null, response.user);
};

module.exports = {
  authorize: basic({
    authorizer: checkCredentialsInMongo,
    authorizeAsync: true
  })
};
