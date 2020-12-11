const express = require('express');
const path = require("path");
const app = express();
const hbs = require("hbs");

const port = 3000;

const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", templates_path);

app.get("/", (req, res) => {
    res.render("index");
});


app.get("*", (req, res) => {
    res.send("This page does not exist");
});

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
});