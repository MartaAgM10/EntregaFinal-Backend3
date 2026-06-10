import mongoose from "mongoose";

const userCollection = "users";

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },
  age: {
    type: Number,
    require: true,
    min: 0,
    max: 99,
  },
  role: {
    type: String,
    default: "user",
  },
  password: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("users", userSchema);

export default User;
