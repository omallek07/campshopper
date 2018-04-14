const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  photoUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://3hack.net/wp-content/uploads/2017/09/camping_equipment.jpg'
  },
  stockQuantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0
    }
  },
  currentPrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  isFeatured: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  numberOfRatings: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  ratingSum: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  averageRating: {
    type: Sequelize.VIRTUAL,
    get () {
      if (this.numberOfRatings === 0) {
        return 0;
      } else {
        return this.ratingSum / this.numberOfRatings
      }
    }
  }
})

module.exports = Product
