const mongoose = require("mongoose");
const db = require("./connection.js");
mongoose.Promise = global.Promise;

const OrderSchema = new mongoose.Schema(
  {
    streetname: {type:String},
    housename: {type:String},
    postcode: {type:Number},
    city: {type:String},
    note: {type:String},
    username: {type:String},
    num: { type: String },
    email: { type: String },
    products: [
      {
        id: { type: String },
        quantity: { type: Number },
      },
    ],
    total: { type: Number },
    confirm: { type: Boolean },
    delivered: { type: Boolean },
    type: { type: String, default: "Order" },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
