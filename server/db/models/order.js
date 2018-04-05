const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM,
    values: ['In-Cart', 'Processing', 'Cancelled', 'Completed']
  },
  purchaseTime: {
    type: Sequelize.DATE,
  },
  sid: {
    type: Sequelize.STRING
  }
})

module.exports = Order
