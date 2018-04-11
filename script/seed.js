/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 *https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db')
const {
  User,
  Address,
  Category,
  Product,
  Review,
  Order
} = require('../server/db/models')

// async function that holds dummy data and creates instances
async function seed () {

  // Stores arrays of dummy data
  const users = [
    { // 1
      firstName: 'John',
      lastName: 'Doe',
      isAdmin: true,
      email: 'cody@email.com',
      password: '123'
    },
    { // 2
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'murphy@email.com',
      password: '321'
    },
    { // 3
      firstName: 'Bill',
      lastName: 'Lee',
      email: 'lee@email.com',
      password: '456'
    },
    { // 4
      firstName: 'Tony',
      lastName: 'Baha',
      email: 'baha@email.com',
      password: '012'
    },
    { // 5
      firstName: 'Pam',
      lastName: 'Harper',
      email: 'harper@email.com',
      password: '456'
    }
  ]

  const products = [
    {
      name: '1 Person Tent',
      description: 'This tent is designed for only one person',
      stockQuantity: 12,
      currentPrice: 145,
      categoryId: 1
    },
    {
      name: '2 Person Tent',
      description: 'This tent is designed for one to two people',
      stockQuantity: 16,
      currentPrice: 1200,
      categoryId: 1
    },
    {
      name: 'Sleeping Bag',
      description: 'This is a very nice sleeping bag',
      stockQuantity: 42,
      currentPrice: 300,
      categoryId: 5
    },
    {
      name: 'Hiking Boots',
      description: 'These boots are built to last',
      stockQuantity: 21,
      currentPrice: 405,
      categoryId: 2
    },
    {
      name: 'Flashlight',
      description: `Don't forget to bring a flashlight!`,
      stockQuantity: 76,
      currentPrice: 40,
      categoryId: 6
    },
    {
      name: 'Hiking Pants',
      description: `Weatherproof pants`,
      stockQuantity: 13,
      currentPrice: 1000,
      categoryId: 4
    }
  ]

  const categories = [
    { //1
      name: 'Tents'
    },
    { //2
      name: 'Hiking Gear'
    },
    { //3
      name: 'Featured'
    },
    { //4
      name: 'Clothing'
    },
    { //5
      name: 'Sleeping Gear'
    },
    { //6
      name: 'Miscellaneous'
    }
  ]

  const addresses = [
    { // 1
      streetOne: '222 W Merchandise Mart Plaza',
      streetTwo: '#1212',
      city: 'Chicago',
      state: 'IL',
      zip: '60654'
    },
    { // 2
      streetOne: '420 E Ohio St',
      streetTwo: 'Apt 22D',
      city: 'Chicago',
      state: 'IL',
      zip: '60611'
    },
    { // 3
      streetOne: '123 6th St.',
      city: 'Melbourne',
      state: 'FL',
      zip: '32904'
    },
    { // 4
      streetOne: '3326 N. Clark St.',
      streetTwo: 'Apt 3F',
      city: 'Chicago',
      state: 'IL',
      zip: '60657'
    },
    { // 5
      streetOne: '1430 Ambridge Road',
      city: 'Centerville',
      state: 'OH',
      zip: '45459'
    }
  ]

  const orders = [
    {
      status: 'In-Cart',
      userId: 1,
      addressId: 1
    },
    {
      status: 'Processing',
      purchaseTime: Date.now(),
      userId: 2,
      addressId: 2
    },
    {
      status: 'Cancelled',
      userId: 3,
      addressId: 3
    },
    {
      status: 'In-Cart',
      userId: 4,
      addressId: 4
    },
    {
      status: 'Completed',
      purchaseTime: Date.now(),
      userId: 5,
      addressId: 5
    },
  ]

  // Model.creates through each object in array
  await Promise.all(users.map(user => User.create(user)))
  console.log(`seeded ${users.length} users`)

  await Promise.all(products.map(product => Product.create(product)))
  console.log(`seeded ${products.length} products`)

  await Promise.all(addresses.map(address => Address.create(address)))
  console.log(`seeded ${addresses.length} addresses`)

  await Promise.all(categories.map(category => Category.create(category)))
  console.log(`seeded ${categories.length} categories`)

  await Promise.all(orders.map(order => Order.create(order)))
  console.log(`seeded ${orders.length} orders`)

}

// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
  .then(() => {
    console.log('Seeding database...');
    return seed();
  })
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })
}

// Invokes main to begin database syncing
main();
