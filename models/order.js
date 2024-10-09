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

//grabs the value of  all the line items times their multiply of whats in the cart 
orderSchema.virtual('orderTotal').get(function () {
    return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function () {
    return this.lineItems.reduce((total, item) => total + item.quantity, 0);
});


orderSchema.virtual('orderId').get(function() {
    return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = async function(userId) {
    const populatedLineItem = await this.findOneAndUpdate(
        { user: userId, isPaid: false},
        {user:userId},
        {upsert: true, new: true}
    )
    .populate('lineItems.item')
    .exec();

    console.log(populatedLineItem, 'POPULATED LINE ITEM IN GET CART');
    return populatedLineItem;
};
// need to include populate 'lineItems.item' b/c without that I will only have access to the document id (in this case Fish Id)
//by using the populate I am telling mongoose to retrieve the referenced 'Fish' documents and replace the objectId with the actual 'Fish'
//this allows me to access the properties of the 'fish' documents in my virtual and thus allows me to calculate the virtuals 
orderSchema.statics.getPaidCart = function(userId) {
    console.log('getPaidcart function in ORDER MODEL')
    return this.find(
        {user: userId, isPaid: true},
    )
    .populate('lineItems.item')
    .exec();
};

orderSchema.methods.addItemToCart = async function (itemId) {
    const cart = this;
    console.log(cart, 'CART IN ADDITEM')
    console.log(itemId, 'ITEM ID IN ADDITEM')
    console.log(typeof itemId, 'type of ITEM ID IN ADDITEM')
    const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
    console.log(lineItem, 'lineItem in addItem to Cart')
    // returns undefined if the item isn't in the cart yet, if it is in the cart then it returns the item object
    
    if (lineItem) {
        lineItem.quantity +=1;
    } else {
        const item = await mongoose.model('Fish').findById(itemId); 
        console.log(item, 'ITEM AFTER BEING FOUND')
        cart.lineItems.push({item});
    }
    return cart.save();
    };
//couldnt use remove b/c I was calling remove on an object that matches the schema rather than an instance. The remove() needed to update to include a splice method involving the index of the lineItem and removing it via splice. FindIndex is used to find the index of the line item in the lineItems array that matches the itemId and then splice is used to remove that line item from the array 
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