const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");
const controller = require("../controllers/products.controller");
const { canCreate } = require("../middleware/permissions");
//add -- if not type return
//update
//delete
//find
//get
//adjust stock quantity

router.post("/create", verifyToken, controller.createItem);

//exit option
router.patch("/update/:id", verifyToken, controller.updateItem);
router.get("/getone", verifyToken, controller.findOne);
router.get("/get", verifyToken, controller.find);
router.delete("/delete/:id", verifyToken, controller.deleteItem);

module.exports = router;
