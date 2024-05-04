const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AutoSchema = new Schema({
  name: { type: String },
  age: { type: String },
  location: { type: String },
  email: { type: String },
  area: { type: String },
  phone: { type: Number },
  auto: { type: String },
  aadhar: { type: String },
  image: { type: String },
  description: { type: String },
});

const AutoModel = mongoose.model("auto", AutoSchema);

module.exports = AutoModel;
