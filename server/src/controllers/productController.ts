import { Request, Response } from "express";
import Product from "../models/productModel";

const retrieveProducts = async (req: Request, res: Response) => {
  try {
    const size = Number(req.query.size) || 10;
    const products = await Product.find({}).limit(size);
    res.status(200).json(products);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default retrieveProducts;
