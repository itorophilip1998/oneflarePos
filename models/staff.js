const mongoose = require("mongoose");

const businessAdminSchema = mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
  },
  salary: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  isAdmin: { type: Boolean, required: true, default: false },
  role: {
    canView: { type: Boolean, default: false },
    canEdit: { type: Boolean, default: false },
    canCreate: { type: Boolean, default: false },
    bulkActions: { type: Boolean, default: false },
    canForcePasswordChange: { type: Boolean, default: false },
  },
  location: {
    type: {
      address: { type: String },
      city: { type: String },
      state: { type: String },
      required: { type: Boolean, default: true },
    },
    required: true,
  },
});

module.exports = mongoose.model("businessAdmin", businessAdminSchema);
