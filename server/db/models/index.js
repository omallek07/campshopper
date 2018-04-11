const User = require('./user')
const Product = require('./product')
const Address = require('./address')
const Category = require('./category')
const Review = require('./review')
const Order = require('./order')
const LineItem = require('./lineitems')

// Model Associations

Review.belongsTo(User)
User.hasMany(Review)

User.hasMany(Order)
Order.belongsTo(User)

Address.belongsTo(User)

Product.hasMany(Review)

Category.hasMany(Product)
Product.belongsTo(Category)

Order.hasMany(LineItem)
LineItem.belongsTo(Order)
LineItem.hasOne(Product)


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
  Order,
  LineItem
}
