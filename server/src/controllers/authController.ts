import { Request, Response } from "express";
import UserAuthModel from "../models/authDataModel";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

const LoginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    //finding user by email
    const user = await UserAuthModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    //compare password
    user.comparePassword(password, (err, isMatch) => {
      if (err || !isMatch) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      const token = jwt.sign(
        { userId: user._id, email: user.email },
        JWT_SECRET,
        { expiresIn: "3h" }
      );
      res.status(200).json({ token });
    });
    
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error:", err });
  }
};

const SignUpController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    //Check if the user already exists
    const existingUser = await UserAuthModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    //creating a new user
    const newUser = new UserAuthModel({ email, password });
    await newUser.save();

    //generating token
    const token = jwt.sign(
      { userId: newUser._id, email: newUser._id },
      JWT_SECRET,
      { expiresIn: "3h" }
    );

    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error:", err });
  }
};

export default { LoginController, SignUpController };
