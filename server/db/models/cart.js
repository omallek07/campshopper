const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  sessionId: {
    type: Sequelize.STRING
  },
  userId: {
    type: Sequelize.INTEGER,
    defaultValue: null
  }
})

module.exports = Cart
