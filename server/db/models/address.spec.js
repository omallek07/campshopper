const {expect} = require('chai')
const db = require('../index')
const Address = db.model('address')

describe('Address model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('address model validations', () => {
    describe('mock address properties', () => {
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

      it('does not have streetTwo, which is NOT required', () => {
        expect(newAddress.streetTwo).to.be.equal(null)
      })

      it('must have a state, which is required', () => {
        expect(newAddress.state).to.be.equal('OH')

        return newAddress.update({ state: null })
        .then(updatedAddress => {
          return updatedAddress
        })
        .catch(err => {
          expect(err).to.be.instanceOf(Error)
        })
      })

    }) // end describe('properties')
  }) // end describe('model validations')
}) // end describe('Address Model')
