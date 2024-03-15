const express = require("express");
const { connectMonogDB } = require("./connection")
const cookieParser = require('cookie-parser')
const path = require('path');
const { restrictToLoggedInUser,ifAuth }= require("./middlewares/auth")

const urlRouter = require("./routes/url")
const staticRouter = require("./routes/staticRouter")
const userRouter = require("./routes/user")

const app = express();
const PORT=8000;

//setting up the view engine.
app.set('view engine','ejs')
app.set('views',path.resolve('./views'))

//middleware
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())


//connect to DB
connectMonogDB('mongodb://127.0.0.1:27017/url-shortner').then(()=>
    console.log("connected to MonogDB")
)

app.use("/url",restrictToLoggedInUser,urlRouter);
// app.use("/url",urlRouter);

app.use("/",ifAuth,staticRouter);
// app.use("/user",userRouter);

//here ifAuth is a problem
app.use("/user",userRouter);

app.use("/admin",restrictToLoggedInUser,checkForAdminUser,adminRoute)

//listening on port
app.listen(PORT,()=>console.log(`Listening to port ${PORT}`))