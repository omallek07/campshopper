const Sequelize = require('sequelize')
const db = require('../db')
const Product = require('./product')

const Review = db.define('review', {
  comment: {
    type: Sequelize.TEXT,
    allowNull: true,
    validae: {
      len: [2, 600]
    }
  },
  rating: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 5
    }
  }
})

Review.afterCreate(review => {
  Product.findOne({
    where: {
      id: review.productId
    }
  })
  .then(foundProduct => {
    foundProduct.numberOfRatings++;
    foundProduct.averageRating += review.rating;
  })
  .catch(err => console.log(err))
})

module.exports = Review
