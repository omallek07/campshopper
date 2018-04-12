const Sequelize = require('sequelize')
const db = require('../db')
const Product = require('./product')

//Figure out hook to grab and set item's current price to currentOrderPrice

const LineItem = db.define('lineItem', {
  orderQuantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  currentOrderPrice: {
    type: Sequelize.INTEGER
  }
})


// Set current product price to line item current order price
LineItem.beforeCreate(instance => {
  return Product.findOne({
    where: {
      id: instance.productId
    }
  })
  .then(foundItem => {
    instance.currentOrderPrice = foundItem.currentPrice
  })
  .catch(err => {
    throw Error(err)
  })
})

// If line item quantity is 0, then destroy
LineItem.afterUpdate((instance) => {
  if (instance.orderQuantity === 0) {
    return LineItem.destroy({
      where: {
        id: instance.id
      }
    })
  }
})

module.exports = LineItem;
