const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SaleInvoiceSchema = new Schema({
  nameCustomer: {
    type: String,
  },
  orderName: {
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

SaleInvoiceSchema.set('timestamps', true);

module.exports = mongoose.model('saleInvoice', SaleInvoiceSchema);
