const express = require("express")
const {createShortIdInDatabase,redirectToURL,getAnalyticsReport} = require("../controllers/url")

const router = express.Router()

router
.route('/')
.post(createShortIdInDatabase)


router.get('/:shortId',redirectToURL)

router.get('/analytics/:shortId',getAnalyticsReport)



module.exports = router