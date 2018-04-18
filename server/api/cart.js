const router = require('express').Router()
const { Cart } = require('../db/models')
module.exports = router

// Add product to user's cart
router.get('/:userId', async (req, res, next) => {
  try {
    // const allProducts = await Product.findAll()
    // res.json(allProducts)
  } catch (err) {
    next(err)
  }
});

// // Get one product by ID
// router.get('/:productId', async (req, res, next) => {
//   try {
//     const product = await Product.findById(req.params.productId)
//     res.json(product)
//   } catch (err) {
//     next(err)
//   }
// });
