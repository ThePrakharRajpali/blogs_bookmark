const mongoose = require ("mongoose")

const bookmarkSchema = new mongoose.Schema({
  title:  String, // String is shorthand for {type: String}
  content:String,
  url:String,
  date: { type: Date, default: Date.now },
  tags: [
    { type:mongoose.Schema.Types.ObjectID,ref:"Tag"}]
});
module.exports = mongoose.model("Bookmark",bookmarkSchema);
