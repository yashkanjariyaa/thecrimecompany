import { Request, Response } from "express";
import OrderDataModel from "../models/orderDataModel";

const RegisterOrder = async (req: Request, res: Response) => {
  try {
    const { userId, items, totalPrice, status } = req.body;

    // Create a new order
    const newOrder = new OrderDataModel({
      userId,
      items,
      totalPrice,
      status,
    });

    await newOrder.save();

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const RetrieveOrderData = async (req: Request, res: Response) => {
  try {
    const orderId = req.query.id;
    // Find the order by ID
    const order = await OrderDataModel.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const DeleteOrderData = async (req: Request, res: Response) => {
  const orderId = req.query.id;
  try {
    const deletedOrder = await OrderDataModel.findByIdAndDelete(orderId);

    if (!deletedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json({ message: "Order deleted successfully", deletedOrder });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

export default { RegisterOrder, RetrieveOrderData, DeleteOrderData };
