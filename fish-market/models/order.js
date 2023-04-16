const mongoose = require('mongoose');
const fish = require('./fish');
const Schema = mongoose.Schema;

const lineItemSchema = new Schema ({
    quantity: {type: Number, default: 1},
    item: fish,
},{
    timestamps: true,
    toJSON: {virtuals: true}
})

lineItemSchema.virtual('extPrice').get(function() {
    return this.quantity*this.item.price
})

const orderSchema = newSchema ({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    lineItems: [lineItemSchema],
    isPaid: {type: Boolean, default: false}
}, {
    timestamps: true,
    toJSON: {virtuasl: true}
});

//need to add virtuals to order documents for cart


module.exports = mongoose.model('Order', orderSchema);