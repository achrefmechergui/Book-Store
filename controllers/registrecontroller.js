
const registermodel = require('../models/registremodel')


exports.getregisterpage =(req,res)=>{


    res.render('registre',{verifuser: req.session.achrefid, message: req.flash('error')[0]} )
}


exports.registerfunction= (req,res)=>{
    registermodel.registeradduser(req.body.name,req.body.email,req.body.password).then((msg)=>{
        console.log(msg)
        res.redirect('/login')

    }).catch((msg)=>{
        console.log(msg)
        req.flash('error', msg)
        res.redirect('/register')
        
    })
}


exports.getloginpage = (req,res)=>{
   res.render('login',{verifuser: req.session.achrefid,message: req.flash('error')[0]})
}



exports.registerlogin = (req,res)=>{
    registermodel.modellogin(req.body.email,req.body.password).then((id)=>{
        req.session.achrefid = id
        res.redirect('/')
    }).catch((err)=>{
        console.log(err)
        req.flash('error', err)
        res.redirect('/login')
    })
}


exports.logoutfunction = (req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/login')
    })
}