import { Request, Response } from "express";
import userDataModel from "../models/userDataModel";

const StoreUserData = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const user = new userDataModel(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
};

const RetrieveUserData = async (req: Request, res: Response) => {
  try {
    const user = await userDataModel.findOne({ email: req.query.email });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send(user);
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};

const UpdateUserData = async (req: Request, res: Response) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "mobile", "address", "age"];
  const isaValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isaValidOperation) {
    return res.status(400).send({ error: "Invalid updates" });
  }

  try {
    const user = await userDataModel.findById(req.query.id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    updates.forEach((update) => ((user as any)[update] = req.body[update]));
    await user.save();
    res.status(200).send(user);
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
};

const DeleteUserData = async (req: Request, res: Response) => {
  try {
    const user = await userDataModel.findByIdAndDelete(req.query.id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    res.status(200).send({ message: "User deleted successfully" });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};

export default {
  StoreUserData,
  RetrieveUserData,
  UpdateUserData,
  DeleteUserData,
};
