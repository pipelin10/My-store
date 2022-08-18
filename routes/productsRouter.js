const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const {limit} = req.query
  const products = []
  for(let i = 0; i < limit; i++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })
  }
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send("Filteeerrr")
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    name: 'Milk',
    price: 1500,
    description: 'Milk for like'
  })
});

module.exports = router