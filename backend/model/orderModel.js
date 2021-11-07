// PACKAGE
import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: [
      {
        name: { type: String, required: true },
        image: { type: String, required: true },
        platform: { type: String, required: true },
        category: { type: String, required: true },
        qty: { type: Number, required: true },
        edition: { type: String, required: true },
        condition: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Accessory",
        },
      },
    ],
    shippingAddress: {
      fName: { type: String, required: true },
      lName: { type: String, required: true },
      streetAddress: { type: String, required: true },
      city: { type: String, required: true },
      number: { type: String, required: true },
      deliveryMethod: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    // paymentResult: {
    //   id: { type: String },
    //   status: { type: String },
    //   update_time: { type: String },
    //   email_address: { type: String },
    // },
    subtotalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// 'ORDER' Model
const Order = mongoose.model("Order", orderSchema);

export default Order;
