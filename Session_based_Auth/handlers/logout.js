module.exports = function Logout(req, res) {
  req.session.destroy(); // Inbuilt function to destroy the session.
  res.redirect("/"); // redirect to home page after logout
};
