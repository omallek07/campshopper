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

// Hook used to update associated product review stats after new review is created
Review.afterCreate(review => {
  Product.findOne({
    where: {
      id: review.productId
    }
  })
  .then(foundProduct => {
    const newAverageRating = foundProduct.averageRating += review.Rating;
    const newNumberOfRatings = ++foundProduct.numberOfRatings
    return foundProduct.update({
      numberOfRatings: newNumberOfRatings,
      averageRating: newAverageRating
    })
  })
  .then(() => {
    console.log(`product reviews updated successfully`)
  })
  .catch(err => console.log(err))
})

module.exports = Review
