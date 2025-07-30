import mongoose from 'mongoose';
const { Schema } = mongoose;

const CartItemSchema = new Schema({
    productId: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    color: { type: String },
    size: { type: String },
    quantity: {
        type: Number,
        required: true,
        min: 1,
        default: 1,
    },
});

const CartSchema = new Schema({
    items: [CartItemSchema],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Cart = mongoose.model('Cart', CartSchema);
export default Cart;