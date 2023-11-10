const express = require('express');

const adminController = require("../controller/adminController");

const route = express.Router();

route.get("/posts", adminController.getPosts);
route.post("/delete-post", adminController.deletePost)
route.post("/update-post/:id" , adminController.updatePost)
route.post("/get-single", adminController.getSingle);

module.exports = route;