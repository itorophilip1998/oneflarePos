const { ErrorHandler } = require("../helpers/error");
const JWT = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
// const query = require("../helpers/queries");

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  res.locals.token = token;
  if (!token)
    throw new ErrorHandler(401, "a token is required for authentication");
  try {
    const _token = token.replace("Token ", "");
    const decoded = JWT.verify(_token, secret);
  } catch (err) {
    next(err);
  }
  return next();
};

module.exports = { verifyToken };
