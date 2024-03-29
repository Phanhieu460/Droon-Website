const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { admin, protect } = require('../middleware/auth');
const Product = require('../models/saleInvoice');

//GET ALL Produc
router.get('/', async (req, res) => {
  try {
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: 'i',
          },
        }
      : {};
    const count = await Product.countDocuments({ ...keyword });
    const products = await Product.find({ ...keyword });
    // .limit(pageSize)
    // .skip(pageSize * (page - 1))
    // .sort({ _id: -1 });
    // res.json({ products });
    res.json({ products, page, count, pages: Math.ceil(count / pageSize) });
  } catch (err) {
    res.status(err.statusCode || 500).send(err.message);
  }
});

// GET SINGLE PRODUCT
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(err.statusCode || 500).send(err.message);
  }
});
// DELETE PRODUCT
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.remove();
      res.json({ message: 'Đơn bán hàng đã được xóa' });
    }
  } catch {
    res.status(err.statusCode || 500).send(err.message);
  }
});

// CREATE PRODUCT
router.post('/', async (req, res) => {
  const { nameCustomer, orderDate, orderName, totalPrice, products } = req.body;
  const productExist = await Product.findOne({ name });
  if (productExist) {
    res.status(400);
    throw new Error('Product name already exist');
  } else {
    const product = new Product({
      nameCustomer,
      orderDate,
      orderName,
      totalPrice,
      products,
    });
    if (product) {
      const createdproduct = await product.save();
      res.status(201).json(createdproduct);
    } else {
      res.status(400);
      throw new Error('Invalid product data');
    }
  }
});

// router.post(
//   '/search',
//   asyncHandler(async (req, res) => {
//     const { search } = req.query;
//     const rgx = (pattern) => new RegExp(`.*${pattern}.*`);
//     const searchRgx = rgx(search);
//     try {
//       const products = await Product.find({
//         $or: [
//           { name: { $regex: searchRgx, $options: 'i' } },
//           { tag: { $regex: searchRgx, $options: 'i' } },
//         ],
//       });

//       if (products) {
//         res.status(200).json({
//           success: true,
//           products,
//           count: products.length,
//           message: 'Search successfully',
//         });
//       } else {
//         res.status(401).json({
//           success: false,
//           data: null,
//           message: 'Error',
//         });
//       }
//     } catch (error) {
//       res.status(500).json({
//         success: false,
//         message: 'Internal Server',
//       });
//     }
//   })
// );

// UPDATE PRODUCT
router.put('/:id', async (req, res) => {
  try {
    const { nameCustomer, orderDate, orderName, totalPrice, products } =
      req.body;
    const product = await Product.findById(req.params.id);
    if (product) {
      product.totalPrice = totalPrice || product.totalPrice;
      product.products = products || product.products;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    }
  } catch (error) {
    res.status(err.statusCode || 500).send(err.message);
  }
});
module.exports = router;
