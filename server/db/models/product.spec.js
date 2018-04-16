const db = require('../index')
const {expect} = require('chai')
const Product = db.model('product')

describe('Product Model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('test Product default values', () => {
    let testProduct;

    beforeEach(() => {
      return Product.create({
        name: 'Hammock',
        description: `It's a nice hammock`,
        currentPrice: 232
      })
      .then(createdProduct => {
        testProduct = createdProduct
      })
    })

    it('Product should have default values for photoUrl, stockQuantity, and isFeatured', () => {
      expect(testProduct.photoUrl).to.be.equal('https://3hack.net/wp-content/uploads/2017/09/camping_equipment.jpg')
      expect(testProduct.stockQuantity).to.be.equal(0)
      expect(testProduct.isFeatured).to.be.equal(false)
    })
  })
})
