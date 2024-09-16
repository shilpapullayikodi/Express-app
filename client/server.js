const express = require("express");
const app = express();
// this is needed to handle post requests / the body of post requests
// app.use(express.json());

// app.use(cors());
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

app.listen(3000, () => {
  console.log("server running on port 3000");
});
