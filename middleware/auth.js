const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  //Get token from the header
  const token = req.header("x-auth-token");

  //Check if there is a token or not
  if (!token) {
    return res.status(401).json({ msg: "No token, Auth denied" });
  }

  //Verify token if there is one
  try {
    const decoded = jwt.verify(token, process.env.jwtSecret);

    req.user = decoded.user;

    next();
  } catch (err) {
    res.status(401).json({ msg: "Token not valid" });
  }
};
