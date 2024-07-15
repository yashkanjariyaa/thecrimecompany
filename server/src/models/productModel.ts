import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productID: {
    type: Number,
    required: true,
    unique: true,
  },
  url: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountBool: {
    type: Boolean,
    required: true,
  },
  discountPrice: {
    type: Number,
    default: 0,
  },
  color: {
    type: String,
    required: true,
  },
  printType: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  collection: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
