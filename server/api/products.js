const router = require('express').Router()
const {Product, Review} = require('../db/models')
module.exports = router

// Get all products
router.get('/', async (req, res, next) => {
  try {
    const allProducts = await Product.findAll()
    res.json(allProducts)
  } catch (err) {
    next(err)
  }
});

// Get one product by ID
router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.productId
      }, include: [{
        model: Review
      }]
    })
    res.json(product)
  } catch (err) {
    next(err)
  }
});
