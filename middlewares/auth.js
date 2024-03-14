const { getUser } = require("../service/auth");

async function restrictToLoggedInUser(req, res, next) {
  const token = req.cookies.uid;

  if (!token) return res.redirect("/login");

  const user = getUser(token);
  if (!user) return res.redirect("/login");

  res.user = user;
  next();
}

async function ifAuth(req, res, next) {
  const token = req.cookies?.uid;

  const user = getUser(token);

  res.user = user;

  next();
}

module.exports = {
  restrictToLoggedInUser,
  ifAuth,
};
