const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Set up CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


const products = [
  { id: 1, name:'tshirt', price: 15 , image: '../images/tshirt.jpg', description:'good'},
  { id: 2, name: 'shirt', price: 20 , image: '../images/shirt.jpg', description:'good'},
  { id: 3, name: 'hat', price: 12 , image: '../images/hat.jpg', description:'good'},
  { id: 4, name: 'watch', price: 40 , image: '../images/watch.jpg', description:'good'},
  { id: 5, name: 'cup', price: 5 , image: '../images/cup.jpg', description:'good'},
  { id: 6, name: 'bag', price: 50 , image: '../images/bag.jpg', description:'good'},
];



app.listen(5000, () => console.log('Server is running on port 5000'));

// GET /products
app.get('/products', (req, res) => {
    res.json(products);
  });


  