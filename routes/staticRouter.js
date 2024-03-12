const express = require('express');
const { renderHomePage } = require("../controllers/staticRoute")
const router = express.Router();

router.get('/',renderHomePage)

module.exports = router