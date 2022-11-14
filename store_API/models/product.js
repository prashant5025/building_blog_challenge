const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'Please add a price'],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 0,

    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    company: {
        type: String,
        enum: {
            values: [
                'ikea', 'liddy', 'caressa', 'marcos'
            ],
            message: '{VALUE} is not supported',

        }
    }
})

module.exports = mongoose.model('Product', ProductSchema);