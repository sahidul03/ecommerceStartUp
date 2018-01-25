var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
  price: { type: Number, default: 0 },
  quantity: { type: Number, default: 0 },
  total_price: { type: Number, default: 0 },
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
