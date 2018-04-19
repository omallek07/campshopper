const User = require('./user')
const Product = require('./product')
const Address = require('./address')
const Category = require('./category')
const Review = require('./review')
const Order = require('./order')
const LineItem = require('./lineitems')
const Brand = require('./brand')
const Cart = require('./cart')
const Guest = require('./guest')

// Model Associations

// Users can create reviews on products
Review.belongsTo(User)
User.hasMany(Review)

// Products will have reviews associated with them
Product.hasMany(Review)
Review.belongsTo(Product)

// If user, all previous orders can be tracked
User.hasMany(Order)

// Guests or Users can have an order
Order.belongsTo(User)
Order.belongsTo(Guest)

// Every order will have an address and an address can belong to many orders
Address.hasMany(Order)

// Products belong to a brand
Product.belongsTo(Brand)
Brand.hasMany(Product)

// Products have many categories
Product.belongsToMany(Category, {through: 'productCategories'})

// Cart will have lineItems, lineItems keep track of product details
Cart.hasMany(LineItem)
LineItem.belongsTo(Cart)
Product.hasMany(LineItem)

// Cart can belong to user or guest
Cart.belongsTo(User)
Order.hasOne(Cart)


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
  LineItem,
  Brand,
  Cart,
  Guest
}
