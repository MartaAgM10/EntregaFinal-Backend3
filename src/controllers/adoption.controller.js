import Adoption from "../models/adoption.model.js";

// GET ALL
export const getAdoptions = async (req, res) => {
  try {
    const adoptions = await Adoption.find();
    res.status(200).send(adoptions);
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
};

// GET BY ID
export const getAdoptionById = async (req, res) => {
  try {
    const adoption = await Adoption.findById(req.params.aid);

    if (!adoption) {
      return res.status(404).send({
        status: "error",
        message: "Adoption not found",
      });
    }

    res.status(200).send(adoption);
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
};

// CREATE
export const createAdoption = async (req, res) => {
  try {
    const adoption = await Adoption.create(req.body);

    res.status(201).send({
      status: "success",
      payload: adoption,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
};

// DELETE
export const deleteAdoption = async (req, res) => {
  try {
    await Adoption.findByIdAndDelete(req.params.aid);

    res.status(200).send({
      status: "deleted",
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
};
