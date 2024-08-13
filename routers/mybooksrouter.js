const mybookcontroller = require ('../controllers/mybookscontroller')
const express = require('express')
let mybookroutes = express.Router()
const guardauth = require('./guardauth')
const multer = require('multer')



mybookroutes.get('/addbook',guardauth.isauth,mybookcontroller.getaddbookpage)
mybookroutes.post('/addbook',multer({storage:multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'assets/uploads')
      },
      filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix+'-'+file.originalname )
      }
})}).single('image'),mybookcontroller.postmybook)
mybookroutes.get('/mybooks',guardauth.isauth,mybookcontroller.getmybookspage)



module.exports = mybookroutes