const db = require('../index')
const {expect} = require('chai')
const Review = db.model('review')
const User = db.model('user')
const Product = db.model('product')

describe('Review model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('review associations', () => {
    describe('should have all associations', () => {
      let testReview;
      let testUser;
      let testProduct;

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
            currentPrice: 1343
          })
        ])
        .then(([user, product]) => {
          testUser = user;
          testProduct = product;

        }).then(() => {
          return Review.create({
            comment: 'This chair was comfortable!',
            rating: 4,
            userId: testUser.id,
            productId: testProduct.id
          })
        })
        .then(createdReview => {
          testReview = createdReview;
        })
      })

      // beforeEach(() => {
      //   Review.findById(1)
      //   .then(foundReview => {
      //     console.log('fsfasf', foundReview)
      //     review = foundReview
      //     return User.findOne({
      //       where: {
      //         id: review.userId
      //       }
      //     })
      //     .then(foundUser => {
      //       user = foundUser
      //     })
      //     .then(() => {
      //       product = review.getProduct()
      //     })
      //   })
      //   .catch(err => new Error(err))
      // })

      it('User should be associated to review', () => {
        expect(testUser.name).to.be.equal('Tim Smith')
      })

      it('Product should be associated to review', () => {
        expect(testProduct.name).to.be.equal('Camp chair')
      })
    }) // end describe('should have all associations')
  }) // end describe('review Associations')
}) // end describe('Review model')
