import passport from "passport";
import express from "express";
import { initializePassport } from "./config/passport.js";
import { connectDB } from "./config/db.js";
import sessionsRouter from "./routes/sessions.router.js";
import usersRouter from "./routes/users.router.js";
import adoptionRouter from "./routes/adoption.router.js";

const app = express();

app.use(express.json());

// Conexion a la BD
connectDB();

//Passport
initializePassport();
app.use(passport.initialize());
//Rutas
app.use("/api/sessions", sessionsRouter);
app.use("/api/users", usersRouter);
app.use("/api/adoptions", adoptionRouter);
export default app;
