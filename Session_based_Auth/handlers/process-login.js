module.exports = function processLogin(req, res) {
  // processes the login . The login id password is admin and password
  if (req.body.username !== "admin" || req.body.password !== "password") {
    return res.send("Invalid username or password");
  }

  req.session.userid = req.body.username; // savs the userid as username provided for demo

  res.redirect("/"); // redirect to home page
};
