const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fishSchema = new Schema({
  speciesName: String,
  altName: String,
  calories: String,
  color: String,
  totalFat: String,
  protein: String,
  servingWeight: String,
  taste: String,
  texture: String,
  imgUrl: String,
  price: {type: Number, default: function() {return Math.floor(Math.random()*100)}}
});

module.exports = mongoose.model("Fish", fishSchema)