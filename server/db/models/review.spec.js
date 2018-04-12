const db = require('../index')
const {expect} = require('chai')
const Review = db.model('review')
const User = db.model('user')
const Product = db.model('product')

describe('Review model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('test Review validations and hooks', () => {
    let testReview;

    beforeEach(() => {
      return Promise.all([
        User.create({
          firstName: 'Tim',
          lastName: 'Smith',
          email: 'smitho@gmail.com',
          password: '25335'
        }),
        Product.create({
          name: 'Camp chair',
          description: `It's a chair for camping.`,
          currentPrice: 1343,
          stockQuantity: 4
        })
      ])
      .then(() => {
        return Review.create({
          comment: 'This chair was comfortable!',
          rating: 4,
          userId: 1,
          productId: 1
        })
      })
      .then(createdReview => {
        testReview = createdReview;
      })
    })

    describe('should have all associations', () => {
      it('User should be associated to review', () => {
        let testUser;

        return User.findOne({
          where: {
            id: testReview.userId
          }
        })
        .then(foundUser => {
          testUser = foundUser
        })
        .then(() => {
          expect(testUser.name).to.be.equal('Tim Smith')
        })
      })

      it('Product should be associated to review', () => {
        let testProduct;

        return Product.findOne({
          where: {
            id: testReview.productId
          }
        })
        .then(foundProduct => {
          testProduct = foundProduct
        })
        .then(() => {
          expect(testProduct.name).to.be.equal('Camp chair')
        })
      })

      describe('Review hooks work properly', () => {
        let testProduct;

        beforeEach(() => {
          return Product.findOne({
            where: {
              id: testReview.productId
            }
          })
          .then(foundProduct => {
            testProduct = foundProduct
          })
        })

        it('Associated product.numberOfRatings should increase when review is created', () => {
            expect(testProduct.numberOfRatings).to.be.equal(1)
        })

        it('Associated product.ratingSum should include new rating value when review is created', () => {
            expect(testProduct.ratingSum).to.be.equal(4)
        })

      }) // end describe('hooks work properly')
    }) // end describe('should have all associations')
  }) // end describe('review Associations')
}) // end describe('Review model')
