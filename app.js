const express    = require("express");
const mongoose   = require("mongoose");
const bodyParser = require("body-parser");

const port    = 3000;
const app     = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

mongoose.connect('mongodb://localhost:27017/blogs_bookmark', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(3000, () => {
    console.log("Server started at Port:3000");
});
