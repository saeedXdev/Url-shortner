const url = require("../models/url")
const shortid = require('shortid');

async function createShortIdInDatabase(req,res){
    const body = req.body
    if(!body) return res.status(400).json({"error":"No url found"})
    
    const shortId= shortid.generate()

      await url.create({
     shortId: shortId,
     redirectURL: body.url,
     visitHistory :[]
 
    })
    // const data = await url.find({})
 
    return res.render('home.ejs',{
        id:shortId,
    })
   return res.status(201).json({"msg":"Shortner created"})
}

async function fetchAllUrlFromDB(req,res){
    const data = await url.find({});
    return res.status(200).json(data);
}

async function redirectToURL(req,res){
    const shortId = req.params.shortId
    const data = await url.findOneAndUpdate({shortId},{
        $push:{
            visitHistory: {
                timestamp: Date.now(),
            }
        }
    })
    // console.log(data)
    const redirectURL = data.redirectURL;
  
    res.status(301).redirect(redirectURL);    
}

async function getAnalyticsReport(req,res){
   
    const shortId = req.params.shortId
    const data = await url.findOne({shortId})

    res.json({totalClicks: data.visitHistory.length, visitHistory : data.visitHistory})
}

async function createNewUser(req,res){
    res.render('signup.ejs')
}

async function loginExistingUser(req,res){
    res.render('login.ejs')
}


module.exports={
    createShortIdInDatabase,
    fetchAllUrlFromDB,
    redirectToURL,
    getAnalyticsReport,
   
}