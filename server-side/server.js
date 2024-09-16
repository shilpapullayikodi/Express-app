const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  // console.log(request.method)
  // send a response
  // this string is displayed in an html page in the browser
  // response.send('<h1>this is the home page</h1>')
  // send a response using json
  response.json([
    { message: "homepage" },
    { message: "about page" },
    { message: "Users page" },
  ]);
});

app.get("/profile", (req, res) => {
  res.send("<h1>this is the profile page</h1>");
});

app.get("/numbers", (req, res) => {
  res.send([23, 42, 13, 7]);
});

app.get("/users/:username/hobbies/:id", (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

app.get("/staff/:person", (req, res) => {
  // Get the actual value sent for the parameter from `req.params`
  const name = req.params.person;
  res.send({
    name: name,
    description: `${name} is a valued employee here are our company!`,
  });
});

// index.js

app.use(express.json());

// ...

app.listen(3000, () => {
  console.log("server running on port 3000");
});
