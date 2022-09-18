const Product = require('./models/product')
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(()=>{
        console.log("Working")
    })
    .catch(err =>{
        console.log("Error")
        console.log(err);
    })

const seedProduct = [
    {
        name: 'Fairy Egglant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddness  Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic  Mini Seedless  Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    },

];
Product.insertMany(seedProduct)
    .then(res =>{
        console.log(res)
    })
    .catch(err =>{
        console.log(err)
    })