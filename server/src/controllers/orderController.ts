import { Request, Response } from "express";
import OrderDataModel from "../models/orderDataModel";

const RegisterOrder = async (req: Request, res: Response) => {
  try {
    const { userId, items, totalPrice } = req.body;

    // Create a new order
    const newOrder = new OrderDataModel({
      userId,
      items,
      totalPrice,
    });

    await newOrder.save();

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const RetrieveOrderData = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;

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

const DeleteOrderData = async (req: Request, res: Response) => {};

export default { RegisterOrder, RetrieveOrderData, DeleteOrderData };
