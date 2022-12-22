const express = require("express");
const blogController = require("../controller/blogController");

const router = express.Router();

router.get("/", blogController.index);
router.get("/create", blogController.create);
router.post("/create", blogController.add);
router.get("/:id", blogController.detail);
router.get("/edit/:id", blogController.edit);
router.post("/update/:id", blogController.update);
router.get("/delete/:id", blogController.deleteBlog);

module.exports = router;
