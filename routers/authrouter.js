const registrecontroller = require('../controllers/registrecontroller')
const express = require('express')
const authrouter = express.Router()
const body = express.urlencoded({extended:true})
const guardauth = require('./guardauth')

authrouter.get('/register',guardauth.isnotauth,registrecontroller.getregisterpage)
authrouter.post('/register',body,registrecontroller.registerfunction)
authrouter.get('/login',guardauth.isnotauth,registrecontroller.getloginpage)
authrouter.post('/login',body,registrecontroller.registerlogin)
authrouter.get('/logout',registrecontroller.logoutfunction)

module.exports = authrouter