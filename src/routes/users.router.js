import { Router } from "express";
import User from "../models/user.model.js";

const router = Router();

// GET ALL
router.get("/", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// GET BY ID
router.get("/:uid", async (req, res) => {
  const user = await User.findById(req.params.uid);
  res.send(user);
});

// UPDATE
router.put("/:uid", async (req, res) => {
  await User.findByIdAndUpdate(req.params.uid, req.body);
  res.send({ status: "updated" });
});

// DELETE
router.delete("/:uid", async (req, res) => {
  await User.findByIdAndDelete(req.params.uid);
  res.send({ status: "deleted" });
});

export default router;
