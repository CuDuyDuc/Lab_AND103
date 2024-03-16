const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const Fruits = new Scheme({
    name: {type: String},
    quantity: {type: String},
    price: {type: Number},
    status: {type: Number},
    image: {type: Array},
    description : {type: String},
    id_distributor : {type: Scheme.Types.ObjectId, ref: 'distributors'},
}, {
    timestamps: true
})

module.exports = mongoose.model('fruit', Fruits);