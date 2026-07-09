module.exports = function HomeHandler(req, res) {
  // a route handler function for home page
  if (!req.session.userid) {
    return res.redirect("/login"); // redirects to login page if the user is not logged in
  }

  res.setHeader("Content-Type", "text/HTML"); // used for rendering the response as an html page

  // provide an html page with the welcome msg along with the logout link
  res.write(`
    <h1>Welcome back ${req.session.userid}</h1>
    <a href="/logout">Logout</a>
  `);

  res.end();
};
