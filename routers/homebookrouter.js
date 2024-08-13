const express = require('express')
const homebookrouter = express.Router()

const homebookcontroller = require('../controllers/homebookcontroller')

homebookrouter.get('/',homebookcontroller.threebookcontroller)




module.exports = homebookrouter




























// Oui, vous avez raison. La notation bookcontroler.Bookcontroller 
// est utilisée car le module bookcontroler exporte un objet qui contient une fonction Bookcontroller.
// Bookcontroller maghir akwess khater l'execussion tssir ki naamlou '/' mouch emediatement