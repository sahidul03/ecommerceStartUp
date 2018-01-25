var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
  name: String,
  details: String,
  total_sales: { type: Number, default: 0 },
  price: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }],
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Item', ItemSchema);
