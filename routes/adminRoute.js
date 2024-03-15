const express = require("express");
const {fetchAllUrlFromDB,fetchAllUsersFromDB}= require("../controllers/adminRoute")
const router = express.Router();


router.get('/url', fetchAllUrlFromDB)
router.get('/users',fetchAllUsersFromDB)

module.exports = router