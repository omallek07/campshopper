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
  Order,
  LineItem
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
      isAdmin: true,
      email: 'harper@email.com',
      password: '456'
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

  const products = [
    { // 1
      name: '1 Person Tent',
      description: 'This tent is designed for only one person',
      stockQuantity: 12,
      currentPrice: 145,
      categoryId: 1
    },
    { // 2
      name: '2 Person Tent',
      description: 'This tent is designed for one to two people',
      stockQuantity: 16,
      currentPrice: 1200,
      categoryId: 1
    },
    { // 3
      name: 'Sleeping Bag',
      description: 'This is a very nice sleeping bag',
      stockQuantity: 42,
      currentPrice: 300,
      categoryId: 5
    },
    { // 4
      name: 'Hiking Boots',
      description: 'These boots are built to last',
      stockQuantity: 21,
      currentPrice: 405,
      categoryId: 2
    },
    { // 5
      name: 'Flashlight',
      description: `Don't forget to bring a flashlight!`,
      stockQuantity: 76,
      currentPrice: 40,
      categoryId: 6
    },
    { // 6
      name: 'Hiking Pants',
      description: `Weatherproof pants`,
      stockQuantity: 13,
      currentPrice: 1000,
      categoryId: 4
    }
  ]

  const reviews = [
    {
      comment: 'This tent was nice, but I wish I got a larger size.',
      rating: 4,
      userId: 1,
      productId: 1
    },
    {
      comment: `My feet hurt after wearing these! Maybe I should have broken them in before the trip...I still want to complain though.`,
      rating: 2,
      userId: 2,
      productId: 4
    },
    {
      comment: `What a life saver! It was dark out and I used this to find my way through the woods.`,
      rating: 4,
      userId: 1,
      productId: 5
    },
    {
      comment: `I loved these boots! So glad I broke them in before my trip.`,
      rating: 5,
      userId: 3,
      productId: 4
    },
    {
      comment: `I slept like a baby with this thing.  Very warm, highly recommend!`,
      rating: 5,
      userId: 4,
      productId: 3
    },
    {
      comment: `Overrated, could barely fit me and my camping bag.`,
      rating: 1,
      userId: 5,
      productId: 2
    },
    {
      comment: `Perfect fit for myself.  Kept me warm and dry all trip!`,
      rating: 5,
      userId: 1,
      productId: 1
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

  const lineItems = [
    {
      orderQuantity: 2,
      orderId: 1,
      productId: 1
    },
    {
      orderQuantity: 1,
      orderId: 1,
      productId: 2
    },
    {
      orderQuantity: 1,
      orderId: 2,
      productId: 3
    },
    {
      orderQuantity: 3,
      orderId: 4,
      productId: 3
    },
    {
      orderQuantity: 1,
      orderId: 5,
      productId: 5
    },
    {
      orderQuantity: 1,
      orderId: 5,
      productId: 4
    },
  ]

  // Model.creates through each object in array
  await User.bulkCreate(users)
  console.log(`seeded ${users.length} users`)

  await Category.bulkCreate(categories)
  console.log(`seeded ${categories.length} categories`)

  await Product.bulkCreate(products)
  console.log(`seeded ${products.length} products`)

  await Order.bulkCreate(orders)
  console.log(`seeded ${orders.length} orders`)

  await Address.bulkCreate(addresses)
  console.log(`seeded ${addresses.length} addresses`)

  await Review.bulkCreate(reviews)
  console.log(`seeded ${reviews.length} reviews`)

  await LineItem.bulkCreate(lineItems)
  console.log(`seeded ${lineItems.length} line items`)

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
