const jwt = require("jsonwebtoken");

const hasAdminRights = (req, res, next) => {
  // Ensure user has administrative priviledges to perform certain operations
  if (req.body.role !== "admin") {
    return res.status(403).send({ message: "Permission Denied" });
  }
  return next();
};
module.exports = hasAdminRights;
