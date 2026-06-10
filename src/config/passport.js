import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import User from "../models/user.model.js";
import { createHash, isValidPassword } from "../utils/hash.js";

//const JwtStrategy = jwtStrategy.Strategy;
//const ExtractJwt = jwtStrategy.ExtractJwt;

const PRIVATE_KEY = "secretCoder";

export const initializePassport = () => {
  // REGISTER
  passport.use(
    "register",
    new LocalStrategy(
      { passReqToCallback: true, usernameField: "email" },
      async (req, username, password, done) => {
        const { first_name, last_name, age } = req.body;

        const exists = await User.findOne({ email: username });
        if (exists) return done(null, false);

        const newUser = {
          first_name,
          last_name,
          email: username,
          age,
          password: createHash(password),
        };

        const result = await User.create(newUser);
        return done(null, result);
      },
    ),
  );

  // LOGIN
  passport.use(
    "login",
    new LocalStrategy(
      { usernameField: "email" },
      async (username, password, done) => {
        const user = await User.findOne({ email: username });
        if (!user) return done(null, false);

        if (!isValidPassword(user, password)) return done(null, false);

        return done(null, user);
      },
    ),
  );

  // JWT
  passport.use(
    "jwt",
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: PRIVATE_KEY,
      },
      async (jwt_payload, done) => {
        const user = await User.findById(jwt_payload.id);
        if (!user) return done(null, false);

        return done(null, user);
      },
    ),
  );
};
