var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var product = new Schema(
  {
    id: String,
    productName: String,
    description: String,
    price : String,
    category : String,
    imageUrl : Number,
    reviews: [],
  }
);

module.exports = mongoose.model("product", product);