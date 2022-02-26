const mongoose = require("mongoose");

const businessSchema = mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  businessRef: {
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
  password: {
    type: String,
    required: true,
  },
  isActive: { type: Boolean, default: true },
  tier: { type: String, default: "free" },
  locations: [
    {
      type: {
        address: { type: String },
        city: { type: String },
        state: { type: String },
        isDefault: { type: Boolean, default: true },
      },
      required: true,
    },
  ],
  expenses: [
    {
      date: { type: String, required: true },
      title: { type: String, required: true },
      amount: { type: String, required: true },
      reference: { type: String, required: true },
      account: { type: Object, required: true },
      category: { type: String, required: true },
      attachments: { type: String },
      details: { type: String, required: true },
      recurring: { type: Boolean, default: false },
    },
  ],
  products: [{ type: Object }],
  customers: [],
  settings: {
    roles: { type: Array },
    hasShop: { type: Boolean, default: false },
    isRestaurant: { type: Boolean, default: false },
  },
});

module.exports = mongoose.model("business", businessSchema);
