const user = require("../models/user")

async function createNewUser(req,res){
    const body = req.body;
  
    await user.create({
        name: body.name,
        email: body.email,
        password: body.password
    })

    res.render("home")
}
async function showSignUpPage(req,res){
    res.render('signup.ejs')

}
async function loginExistingUser(req,res){


    //verify user here and redirect to homepage.
    res.render("home")
}


module.exports = {
    createNewUser,
    showSignUpPage,
    loginExistingUser
}