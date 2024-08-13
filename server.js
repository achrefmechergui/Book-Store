const express = require('express')
const app = express()
const path = require('path')
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session)
const homebookrouter = require('./routers/homebookrouter')
const ourbookrouter = require('./routers/ourbookrouter')
const authrouter = require('./routers/authrouter')
let flash = require('connect-flash')
let aboutcontactrouter = require('./routers/aboutcontactroutes')
const mybookrouter = require('./routers/mybooksrouter')




var store = new MongoDBStore({
  uri: 'mongodb://localhost:27017/library',
  collection: 'mySessions'
})

app.use(session({
  secret : 'this is the secret fhfhfhjfff',
  store : store,
  resave :true,
  
  saveUninitialized : true
}))
app.use(flash())


app.use('/',aboutcontactrouter)

app.use(express.static(path.join(__dirname,'assets')))
app.set('view engine','ejs')
app.set('views','views')

app.use('/',homebookrouter)
app.use('/books',ourbookrouter)
app.use('/',authrouter)
app.use('/',mybookrouter)


// app.get('/details',(req,res)=>{
//   res.render('detail.ejs')
// })



// app.get('/about',(req,res)=>{
//   res.render('About.ejs')
// })

// app.get('/contact',(req,res)=>{
//   res.render('contact.ejs')
// })
// app.get('/books',(req,res)=>{
//   res.render('ourbooks.ejs')
// })
// app.get('/login',(req,res)=>{
//   res.render('login.ejs')
// })

// app.get('/registre',(req,res)=>{
//   res.render('registre.ejs')
// })
app.listen(3000,()=>{
    console.log("server is running on port 3000 ... ")
})


