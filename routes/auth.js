const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth.controller");
// const { verifyToken } = require("../middleware/auth");

router.post("/create", auth.signup);
router.post("/login",  auth.login);
//deactivate user
module.exports = router;
