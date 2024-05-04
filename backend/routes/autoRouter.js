const express = require("express");
const router = express.Router();
const AutoModel = require("../models/autoModel");

router.get("/all_auto", async (req, res) => {
  const product = await AutoModel.find({});
  res.json(product);
});
router.get("/get_auto/:id", async (req, res) => {
  const { id } = req.params;

  const product = await AutoModel.findById(id);

  if (!product) {
    res.json({ message: "product not found", status: 0 });
    return;
  }

  res.json(product);
});

router.post("/add", (req, res) => {
  const {
    name,
    age,
    location,
    area,
    phone,
    auto,
    aadhar,
    image,
    description,
    email,
  } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required", status: 0 });
  }

  // Check if the email already exists in the database
  AutoModel.findOne({ email: email })
    .then((existingAuto) => {
      if (existingAuto) {
        // If a matching record exists, send an error response
        return res
          .status(400)
          .json({ message: "Auto with same email already exists", status: 0 });
      } else {
        // If no duplicate found, create a new record
        const newProduct = new AutoModel({
          name,
          age,
          location,
          area,
          phone,
          auto,
          aadhar,
          image,
          description,
          email, // Assuming email is part of your schema
        });

        newProduct
          .save()
          .then((docs) => {
            res
              .status(201)
              .send({ message: "New Auto added", status: 1, docs });
          })
          .catch((error) => {
            console.error("Error saving auto:", error);
            res.status(500).send({
              message: "Failed to add new auto",
              status: 0,
              error: error.message,
            });
          });
      }
    })
    .catch((error) => {
      console.error("Error checking for existing auto:", error);
      res.status(500).send({
        message: "Failed to check for existing auto",
        status: 0,
        error: error.message,
      });
    });
});

module.exports = router;
