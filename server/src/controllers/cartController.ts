import { Request, Response } from "express";
import CartDataModel from "../models/cartDataModel";

const StoreCartData = async (req: Request, res: Response) => {
  try {
    const { userId, items } = req.body;

    // Create a new cart data entry
    const newCartData = new CartDataModel({ userId, items });
    await newCartData.save();

    res.status(201).json(newCartData);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const UpdateCartData = async (req: Request, res: Response) => {
  try {
    const cartId = req.query.id;
    const { items } = req.body;

    // Find the cart data by ID and update it
    const updatedCartData = await CartDataModel.findByIdAndUpdate(
      cartId,
      { items, updatedAt: new Date() },
      { new: true }
    );

    if (!updatedCartData) {
      return res.status(404).json({ message: "Cart data not found" });
    }

    res.status(200).json(updatedCartData);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const RetrieveCartData = async (req: Request, res: Response) => {
  try {
    const userId  = req.query.id;

    // Retrieve all cart data for a specific user
    const cartData = await CartDataModel.find({ userId: userId });

    res.status(200).json(cartData);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const DeleteCartData = async (req: Request, res: Response) => {
  try {
    const cartId  = req.query.id;

    // Delete cart data by ID
    const deletedCartData = await CartDataModel.findByIdAndDelete(cartId);

    if (!deletedCartData) {
      return res.status(404).json({ message: "Cart data not found" });
    }

    res.status(200).json({ message: "Cart data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export default {
  StoreCartData,
  UpdateCartData,
  RetrieveCartData,
  DeleteCartData,
};
