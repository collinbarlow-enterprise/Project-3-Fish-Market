const mongoose = require('mongoose');
const Fish = require('./fish');
const Schema = mongoose.Schema;

const lineItemSchema = new Schema ({
    quantity: {type: Number, default: 1},
    item: {type: Schema.Types.ObjectId, ref: 'Fish'}
},{
    timestamps: true,
    toJSON: {virtuals: true}
})

lineItemSchema.virtual('extPrice').get(function() {
    return this.quantity*this.item.price
})

const orderSchema = new Schema ({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    lineItems: [lineItemSchema],
    isPaid: {type: Boolean, default: false}
}, {
    timestamps: true,
    toJSON: {virtuals: true}
});

//need to add virtuals and statics to order documents for cart

//grabs the value of  all the line items times their multiply of whats in the cart (where does the total come from? is that part of the reduce method?)
orderSchema.virtual('orderTotal').get(function () {
    return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function () {
    return this.lineItems.reduce((total, item) => total + item.quantity, 0);
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
    )
    //check notes on why this is needed
    .populate('lineItems.item')
    .exec();
};

orderSchema.methods.addItemToCart = async function (itemId) {
    const cart = this;
    const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
    if (lineItem) {
        lineItem.quantity +=1;
    } else {
        const item = await mongoose.model('Fish').findById(itemId); 
        cart.lineItems.push({item});
    }
    return cart.save();
    };
//couldnt use remove b/c I was calling remove on an object that matches the schema rather than an instance. The remove() so needed to update to include a splice method involving the index of the lineItem and removing it via splice. FindIndex is used to find the index of the line item in the lineItems array that matches the itemId and then splice is used to remove that line item from the array 
orderSchema.methods.setItemQty = function (itemId, newQty) {
    const cart = this;
    const lineItemIndex = cart.lineItems.findIndex(lineItem => lineItem.item._id.equals(itemId));
    if (lineItemIndex !==1 && newQty <= 0) {
        cart.lineItems.splice(lineItemIndex, 1);
    } else if (lineItemIndex !== -1) {
        cart.lineItems[lineItemIndex].quantity = newQty; 
    }
    return cart.save();
};


module.exports = mongoose.model('Order', orderSchema);