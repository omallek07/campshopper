const router = require('express').Router()
module.exports = router

const adminGateway = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  }
  else {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
  }
}

// adminGateway to check if user is an admin
router.use('/admin', adminGateway)
router.use('/admin', require('./admin'))

router.use('/users', require('./users'))
router.use('/products', require('./products'))
router.use('/categories', require('./categories'))
router.use('/cart', require('./cart'))


router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
