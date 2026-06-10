import mongoose from "mongoose";

const adoptionSchema = new mongoose.Schema({
  petId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  adoptionDate: {
    type: Date,
    default: Date.now,
  },
});

const Adoption = mongoose.model("adoptions", adoptionSchema);

export default Adoption;
