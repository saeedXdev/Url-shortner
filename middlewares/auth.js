const {getUser}= require("../service/auth")

async function restrictToLoggedInUser(req,res,next){

    const uuId = req.cookies.uid;

    if(!uuId) return res.redirect('/login')

    const user = getUser(uuId)
    if(!user) return res.redirect('/login')

    res.user = user

    next();


}

module.exports ={
    restrictToLoggedInUser
}