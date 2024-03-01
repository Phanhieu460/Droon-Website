const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApzonSchema = new Schema({
  nameCustomer: {
    type: String,
  },
  orderDate: {
    type: String,
  },
  totalPrice: {
    type: Number,
  },
  products: [
    {
      productId: {
        type: String,
      },
      productName: {
        type: String,
      },
      quantity: {
        type: Number,
      },
      productPrice: {
        type: Number,
      },
      total: {
        type: Number,
      },
    },
  ],
});

ApzonSchema.set('timestamps', true);

module.exports = mongoose.model('apzons', ApzonSchema);
