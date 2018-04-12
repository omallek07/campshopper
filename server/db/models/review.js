const Sequelize = require('sequelize')
const db = require('../db')
const Product = require('./product')

const Review = db.define('review', {
  comment: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: {
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

// Hook used to update associated product review stats after new review is created
Review.beforeCreate(review => {
  Product.findOne({
    where: {
      id: review.productId
    }
  })
  .then(foundProduct => {
    const newRatingSum = foundProduct.ratingSum += review.rating;
    const newNumberOfRatings = ++foundProduct.numberOfRatings
    return foundProduct.update({
      numberOfRatings: newNumberOfRatings,
      ratingSum: newRatingSum
    })
  })
  .catch(err => console.log(err))
})

module.exports = Review
