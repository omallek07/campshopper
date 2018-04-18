const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM,
    values: ['Processing', 'Cancelled', 'Completed']
  },
  orderSubmittedTime: {
    type: Sequelize.DATE
  },
  orderCompletedTime: {
    type: Sequelize.DATE
  },
  orderCancelledTime: {
    type: Sequelize.DATE
  }
})

Order.afterUpdate(orderInstance => {
  if (orderInstance.status === 'Processing') {
    orderInstance.orderSubmittedTime = Date.now()
  }
  if (orderInstance.status === 'Completed') {
    orderInstance.orderCompletedTime = Date.now()
  }
  if (orderInstance.status === 'Cancelled') {
    orderInstance.orderCancelledTime = Date.now()
  }
})

module.exports = Order
