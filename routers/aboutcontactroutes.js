const contactaboutcontroller = require('../controllers/aboutcontactcontroller')
const express = require('express')

const aboutcontactrouter = express.Router()


aboutcontactrouter.get('/about',contactaboutcontroller.getaboutpage)
aboutcontactrouter.get('/contact',contactaboutcontroller.getcontactpage)


module.exports = aboutcontactrouter