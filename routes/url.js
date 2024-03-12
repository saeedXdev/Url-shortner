const express = require("express")
const {createShortIdInDatabase,fetchAllUrlFromDB,redirectToURL,getAnalyticsReport,createNewUser,loginExistingUser} = require("../controllers/url")

const router = express.Router()

router
.route('/')
.post(createShortIdInDatabase)
.get(fetchAllUrlFromDB)

router.get('/:shortId',redirectToURL)

router.get('/analytics/:shortId',getAnalyticsReport)



module.exports = router