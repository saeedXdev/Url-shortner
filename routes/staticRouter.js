const express = require('express');
const { renderHomePage } = require("../controllers/staticRoute")
const router = express.Router();

router.get('/',renderHomePage)

router.get('/signup',(req,res)=>{
    res.render("signup");
})

router.get('/login',(req,res)=>{
    res.render("login");
})

module.exports = router