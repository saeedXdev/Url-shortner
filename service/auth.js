const sessionIdToUserMap = new Map();
const jwt = require('jsonwebtoken')
require('dotenv').config()
const privateKey = process.env.JWT_PRIVATE_KEY;

function setUser(user)
{
   
    const payload={
        name : user.name,
        email : user.email
    }
    // console.log("checking")
    return jwt.sign(payload,privateKey)
    // sessionIdToUserMap.set(id,user);
}

function getUser(token)
{   
    if(!token) return null;
    return jwt.verify(token,privateKey)
    // return sessionIdToUserMap.get(id)
}

module.exports ={
    setUser,
    getUser
}