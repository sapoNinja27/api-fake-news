require("dotenv").config();
const mongoose = require('mongoose')
const URL = process.env.MONGOOSE_URL
const options = {
    useNewUrlParser: true
}

mongoose.connect(URL, options)