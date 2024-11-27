const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var items = [
  {
    name: "Eat",
    completed: true,
  },
  {
    name: "Sleep",
    completed: false,
  },
  {
    name: "Code",
    completed: false,
  },
];

app.get("/", function (req, res) {
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", function (req, res) {
  let newItem = req.body.newItem;

  items.push({ name: newItem, completed: false });
  console.log(items);

  res.redirect("/");
});

//Express endpoint to delete todo from list
app.post("/delete", function (req, res) {
  let itemToBeDeleted = req.body.deleteItem;
  items.splice(itemToBeDeleted, 1);
  res.redirect("/");
});

//Express Endpoint to update todo
app.post("/update", function (req, res) {
  items[req.body.updateItem].completed = req.body.completed;
  res.redirect("/");
});

app.listen(500, function (req, res) {
  console.log("Server is running on port 500");
});

