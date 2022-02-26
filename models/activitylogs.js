const mongoose = require("mongoose");

const activityLogSchema = mongoose.Schema({
  businessRef: { type: String },
  type: { type: String },
  activity: { type: String },
  user: { type: String },
  created: { type: Date, default: () => Date.now() },
});

module.exports = mongoose.model("activityLog", activityLogSchema);
