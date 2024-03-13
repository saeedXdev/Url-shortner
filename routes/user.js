const express = require("express");
const {createNewUser,loginExistingUser} = require("../controllers/user")
const user = require("../models/user")

const router = express.Router();

router.post('/',createNewUser)
router.get('/', async(req,res)=>{
    res.send(await user.find({}))
})

router.post('/login',loginExistingUser)



module.exports = router