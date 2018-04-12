const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM,
    values: ['In-Cart', 'Processing', 'Cancelled', 'Completed']
  },
  purchaseTime: {
    type: Sequelize.DATE
  },
  completedOrderTime: {
    type: Sequelize.DATE
  },
  sid: {
    type: Sequelize.STRING
  }
})


Order.afterUpdate((orderInstance) => {
  if (orderInstance.status === 'Processing') {
    orderInstance.purchaseTime = Date.now()
  }
  if (orderInstance.status === 'Completed') {
    orderInstance.completedOrderTime = Date.now()
  }
})

module.exports = Order
