const User = require("../models/user");
const BusinessAdmin = require("../models/business");
const Staff = require("../models/staff");
const SuperAdmin = require("../models/superadmin");
const Logs = require("../models/activitylogs");
const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");
const query = require("../helpers/queries");

const cleanText = (text) => {
  return text.toLowerCase().trim();
};

const createId = () => {
  return uuidv4();
};

const joinToObjects = (object, key, val) => {
  return { ...object, [key]: val };
};

const getModel = (model) => {
  if (model === "user") return User;
  if (model === "business") return BusinessAdmin;
  if (model === "admin") return Staff;
  if (model === "superadmin") return SuperAdmin;
  return;
};

const createRef = () => {
  return crypto.randomBytes(10).toString("hex");
};

const deactivateAccount = () => {};

const createLog = () => {};

const exportAsExcel = () => {};

const createQrCode = () => {};

module.exports = { cleanText, createId, joinToObjects, getModel, createRef };
