import mongoose from "mongoose";
const Schema = mongoose.Schema;
const cartItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true, min: 0 },
});

const cartDataSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  items: [cartItemSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

cartDataSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

const CartDataModel = mongoose.model("CartData", cartDataSchema);

export default CartDataModel;
