const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  // Get the token from the header if present
  const token = req.headers["Authorization"] || req.headers["authorization"];

  // If no token found, return response and stop
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    // If can verify the token, set req.user and pass to next middleware
    const decoded = jwt.verify(token, config.get("myprivatekey"));
    req.user = decoded;
    next();
  } catch (ex) {
    // If token not valid
    res.status(400).send("Token is not valid!");
  }
};