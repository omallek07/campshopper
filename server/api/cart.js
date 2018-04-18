const router = require('express').Router()
const { Cart } = require('../db/models')
module.exports = router

// When a user/guest accesses the site, a cart is created and attached to their session id
router.post('/:sessionId', async (req, res, next) => {
  try {
    const cart = await Cart.create({sessionId: req.params.sessionId})
    res.json(cart)
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
