const express = require('express')
const ourbookcontroller = require('../controllers/ourbookcontroller')

const ourbookrouter = express.Router()
const guardauth = require('./guardauth')

ourbookrouter.get('/',guardauth.isauth,ourbookcontroller.allbookcontroller)
ourbookrouter.get('/:id',guardauth.isauth,ourbookcontroller.onebookdetailcontroller)


module.exports = ourbookrouter