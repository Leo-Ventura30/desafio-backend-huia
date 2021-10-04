const jwt = require("jsonwebtoken");
const tmp_token = "4%7@3#8$7%4*_387";

class authToken {
  token(id_user, id_business) {
    return jwt.sign({ id_user, id_business }, process.env.SECRET || tmp_token, {
      expiresIn: 60 * 60 * 24,
    });
  }
}

module.exports = new authToken();
