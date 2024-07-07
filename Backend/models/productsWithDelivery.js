const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductListSchema = new Schema({
    tipo: {
        type: String,
        required: true,
    },
    cantidad: {
        type: Number,
        required: true,
    },
    talla: {
        type: String,
        required: true,
    },
    Genero: {
        type: String,
        required: true,
    },
    ValorUnitario: {
        type: Number,
        required: true,
    },
    SumaDeLaCantidad: {
        type: Number,
        required: true,
    },
});

const ProductSchema = new Schema({
    nameClient: {
        type: String,
        required: true,
    },
    numberContact: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    numberProducts: {
        type: Number,
        required: true,
    },
    productsList: {
        type: [ProductListSchema],
        required: true,
    },
    delivery: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('ProductWithDelivery', ProductSchema);