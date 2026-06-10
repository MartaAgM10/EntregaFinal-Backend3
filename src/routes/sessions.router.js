import { Router } from "express";
import passport from "passport";
import { generateToken } from "../utils/jwt.js";

const router = Router();

// REGISTER
router.post(
  "/register",
  passport.authenticate("register", { session: false }),
  (req, res) => {
    res.send({ status: "success", message: "Usuario creado" });
  },
);

// LOGIN
router.post(
  "/login",
  passport.authenticate("login", { session: false }),
  (req, res) => {
    const token = generateToken(req.user);

    res.send({
      status: "success",
      token,
    });
  },
);

// CURRENT
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send({
      status: "success",
      user: req.user,
    });
  },
);

export default router;
