const {expect} = require('chai')
const db = require('../index')
const Address = db.model('address')

describe('Address model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('model validations', () => {
    describe('properties', () => {
      let newAddress;

      beforeEach(() => {
        return Address.create({
          streetOne: '135 Happy Town',
          city: 'Cleveland',
          state: 'OH',
          zip: 23256
        })
        .then(address => {
          newAddress = address
        })
      })

      it('has streetOne, which is required', () => {
        expect(newAddress.streetOne).to.be.equal('135 Happy Town')
      })
    }) // end describe('properties')
  }) // end describe('model validations')
}) // end describe('Address Model')
