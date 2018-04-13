const router = require('express').Router()
const {
  Product,
  User,
  Brand,
  Review,
  Category,
  Order
} = require('../db/models')

module.exports = router

// Get all users
router.get('/users/', async (req, res, next) => {
  try {
    const allUsers = await User.findAll({
      attributes: ['id', 'name', 'email', 'isAdmin']
    })
    res.json(allUsers)
  } catch (err) {
    next(err)
  }
});

// delete user
router.delete('/users/:userId', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId)
    user.destroy()
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

// Get one product by ID
router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.productId)
    res.json(product)
  } catch (err) {
    next(err)
  }
});
