const User = require('./user')
const Product = require('./product')
const Address = require('./address')
const Category = require('./category')
const Review = require('./review')
const Order = require('./order')

// Model Associations

Review.belongsTo(User)
User.hasMany(Review)

User.hasMany(Order)
Order.belongsTo(User)

Address.belongsTo(User)

Product.hasMany(Review)

Category.hasMany(Product)
Product.belongsTo(Category)


/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Product,
  Address,
  Category,
  Review,
  Order
}
