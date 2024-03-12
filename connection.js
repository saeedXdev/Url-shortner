const mongoose = require("mongoose");

function connectMonogDB(url){

   return  mongoose.connect(url)

}

module.exports = {
    connectMonogDB,
}