const express = require("express");

const router = express.Router();
const Blog = require("../models/blog");
const blogController = require('../controllers/blogControllers');

// Blog routes

router.get("/", blogController.blog_index);

router.get("/create", blogController.blog_create_get);

// Managing Post requests
router.post("/", blogController.blog_create_post);

// Specific and request parameters
router.get("/:id", blogController.blog_details);

// DELETE request handling
router.delete("/:id", blogController.blog_delete);

module.exports = router;
