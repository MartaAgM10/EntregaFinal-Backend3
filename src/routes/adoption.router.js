import { Router } from "express";
import {
  getAdoptions,
  getAdoptionById,
  createAdoption,
  deleteAdoption,
} from "../controllers/adoption.controller.js";

const router = Router();

// GET ALL
router.get("/", getAdoptions);

// GET BY ID
router.get("/:aid", getAdoptionById);

// CREATE
router.post("/", createAdoption);

// DELETE
router.delete("/:aid", deleteAdoption);

export default router;
