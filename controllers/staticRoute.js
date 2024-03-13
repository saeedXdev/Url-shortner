const url = require("../models/url")

async function renderHomePage(req,res){
    const data = await url.find({});
    return res.render('home.ejs',{
        // url:data,
    })
}


module.exports={
    renderHomePage,
}