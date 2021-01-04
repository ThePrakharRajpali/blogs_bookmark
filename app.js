const express    = require("express");
const mongoose   = require("mongoose");
const bodyParser = require("body-parser");

const Bookmark   = require("./models/bookmark");
const Tag        =require("./models/tag");

const port    = 3000;
const app     = express();

mongoose.connect('mongodb://localhost:27017/blogs_bookmark', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    Bookmark.find({},(err,bookmarks)=>{
      if(err){
        console.log(err);
      }
        else {
          res.render("home",{bookmarks:bookmarks});
        }
    })

});

app.listen(3000, () => {
    console.log("Server started at Port:3000");
});
