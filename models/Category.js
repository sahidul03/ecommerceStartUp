var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
  name: String,
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  }],
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Category', CategorySchema);
