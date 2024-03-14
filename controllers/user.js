const user = require("../models/user")
const { v4: uuidv4 } = require('uuid');
const {setUser,} = require("../service/auth")


async function createNewUser(req,res){
    const body = req.body;
  
    await user.create({
        name: body.name,
        email: body.email,
        password: body.password
    })

    res.redirect("/login")
}
async function showSignUpPage(req,res){
    
    res.render('signup.ejs')

}
async function loginExistingUser(req,res){

    // console.log("loginExistingUser")

    const {email,password} = req.body;
    // return res.json({"status":"this function called"})
    const userData= await user.findOne({email,password});
    if(!userData) return res.render('login',{
        error:"Invalid username or password"
    })
    // const sessionId = uuidv4(); 
    // console.log(sessionId);
    
    const token = setUser(userData)
    res.cookie('uid',token);
    // console.log(getUser(sessionId))
    //verify user here and redirect to homepage.
    res.redirect("/")
}


module.exports = {
    createNewUser,
    showSignUpPage,
    loginExistingUser
}