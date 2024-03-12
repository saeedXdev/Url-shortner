const express = require("express");
const {createNewUser,loginExistingUser,showSignUpPage} = require("../controllers/user")

const router = express.Router();

router.get('/signup',showSignUpPage);
router.post('/signup',createNewUser)

router.get('/login',loginExistingUser);


module.exports = router