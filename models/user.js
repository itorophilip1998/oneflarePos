const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
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
  phone: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  forcePasswordChange: {
    type: Boolean,
    default: false,
  },
  isActive: { type: Boolean, default: true },
  locations: [
    {
      type: {
        address: { type: String },
        city: { type: String },
        state: { type: String },
        isDefault: { type: Boolean, default: false },
        required: { type: Boolean, default: true },
      },
      required: true
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
