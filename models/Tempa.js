var mongoose = require('mongoose');

var tempaSchema = new mongoose.Schema({
  ID: { type: String, unique: true },
  SECRET: String,

});

module.exports = mongoose.model('Tempa', tempaSchema);
