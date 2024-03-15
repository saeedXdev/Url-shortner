
const url = require("../models/url")
const user = require("../models/user")


async function fetchAllUrlFromDB(req,res){
    const data = await url.find({});
    return res.status(200).json(data);
}

async function fetchAllUsersFromDB(req,res){
    const data = await user.find({});
    return res.status(200).json(data);
}

module.exports={
    fetchAllUrlFromDB,
    fetchAllUsersFromDB
}