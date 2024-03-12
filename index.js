const express = require("express");
const { connectMonogDB } = require("./connection")
const urlRouter = require("./routes/url")
const staticRouter = require("./routes/staticRouter")
const userRouter = require("./routes/user")
const path = require('path');


const app = express();
const PORT=8000;

//setting up the view engine.
app.set('view engine','ejs')
app.set('views',path.resolve('./views'))

//middleware
app.use(express.urlencoded({extended: false}))

//connect to DB
connectMonogDB('mongodb://127.0.0.1:27017/url-shortner').then(()=>
    console.log("connected to MonogDB")
)

app.use("/url",urlRouter);
app.use("/",staticRouter);
app.use("/user",userRouter);

//listening on port
app.listen(PORT,()=>console.log(`Listening to port ${PORT}`))