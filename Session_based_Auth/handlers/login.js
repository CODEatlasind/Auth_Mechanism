module.exports = function LoginHandler(req, res) {
  // handler function for login page
  if (req.session.userid) {
    return res.redirect("/"); // If the user is logged in, he will be sent to the homepage
  }
  // If user is not logged in, he will be sent to the login page. Below is the html loggin page
  res.setHeader("Content-Type", "text/HTML"); // used for rendering the response as an html page
  res.write(`
    <h1>Login</h1>
    <form method="post" action="/process-login">
      <input type="text" name="username" placeholder="Username" /> <br>
      <input type="password" name="password" placeholder="Password" /> <br>
      <button type="submit">Login</button>
    </form>
  `);

  res.end();
};
