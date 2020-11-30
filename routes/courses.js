const express = require("express");
const { get } = require("mongoose");
const { getCourses } = require("../controllers/courses");

const router = express.Router({ mergeParams: true });

router.route("/").get(getCourses);

module.exports = router;
