const db = require('../index')
const {expect} = require('chai')
const Review = db.model('review')
const User = db.model('user')
const Product = db.model('product')

describe('Review model', () => {
  beforeEach(() => {
    return db.sync({force: true})
    .then(async () => {
      try {
        const user = await User.create({
          firstName: 'Tim',
          lastName: 'Smith',
          email: 'smitho@gmail.com',
          password: '25335'
        })
        const product = await Product.create({
          name: 'Camp chair',
          description: `It's a chair for camping.`,
          currentPrice: 1343
        })
        const review = await Review.create({
          comment: 'This chair was comfortable!',
          rating: 4
        })
        await review.addUser(user)
        await review.addProduct(product)

      } catch (err) {
        throw new Error(`${err} occurred!`)
      }
    })
  })

  describe('review associations', () => {
    describe('should have all associations', async () => {
      const review = await Review.findById(1)
      const user = await User.findOne({
        where: {
          id: review.userId
        }
      })
      const product = await review.getProduct()

      it('User should be associated to review', () => {
        expect(user.name).to.be.equal('Tim Smith')
      })

      it('Product should be associated to review', () => {
        expect(product.name).to.be.equal('Camp chair')
      })


    }) // end describe('should have all associations')
  }) // end describe('review Associations')
}) // end describe('Review model')
