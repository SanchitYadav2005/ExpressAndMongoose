const mongoose = require("mongoose");

const productShema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        min: 0,
        required: true
    },
    category:{
        type: String,
        enum: ['fruit', 'vegetable', 'dairy']
    }
})

const Product = mongoose.model('Product', productShema)
// exporting product.
module.exports = Product; 