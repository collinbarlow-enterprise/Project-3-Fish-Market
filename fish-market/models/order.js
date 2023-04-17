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

//need to add virtuals and statics to order documents for cart

//grabs the value of  all the line items times their multiply of whats in the cart (where does the total come from? is that part of the reduce method?)
orderSchema.virtual('orderTotal').get(function () {
    return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function () {
    return this.lineItems.reduce((total, item) => total + item.qty, 0);
});

//this one could probably be changed
orderSchema.virtual('orderId').get(function() {
    return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = function(userId) {
    return this.findOneAndUpdate(
        { user: userId, isPaid: false},
        {user:userId},
        {upsert: true, new: true}
    );
};

orderSchema.methods.addItemToCart = async function (itemId) {
    const cart = this;
    const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
    if (lineItem) {
        lineItem.qty +=1;
    } else {
        const item = await mongoose.model('Item').findById(itemId); 
        cart.lineItems.push({item});
    }
    return cart.save();
    };

orderSchema.methods.setItemQty = function (itemId, newQty) {
    const cart = this;
    const lineItem = cart.lineItems.find(line => lineItem.item._id.equals(itemId));
    if (lineItem && newQty <= 0) {
        lineItem.remove();
    } else if (lineItem) {
        lineItem.qty = newQty; 
    }
    return cart.save();
};


module.exports = mongoose.model('Order', orderSchema);