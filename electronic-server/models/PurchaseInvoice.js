const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PurchaseInvoiceSchema = new Schema({
  nameSupplier: {
    type: String,
  },
  purchaseName: {
    type: String,
  },
  purchaseDate: {
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

PurchaseInvoiceSchema.set('timestamps', true);

module.exports = mongoose.model('purchaseInvoice', PurchaseInvoiceSchema);
