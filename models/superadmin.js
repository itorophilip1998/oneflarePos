const mongoose = require("mongoose");

const superAdminSchema = mongoose.Schema({
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
  password: {
    type: String,
    required: true,
  },
  isSuperAdmin: { type: Boolean, default: false },
  role: {
    type: {
      canView: { type: Boolean, default: false },
      canEdit: { type: Boolean, default: false },
      bulkActions: { type: Boolean, default: false },
      canForcePasswordChange: { type: Boolean, default: false },
    },
    required: true,
  },
});

module.exports = mongoose.model("superAdmin", superAdminSchema);
