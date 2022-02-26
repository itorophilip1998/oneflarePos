const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");


//update user locations
//delete location
module.exports = router