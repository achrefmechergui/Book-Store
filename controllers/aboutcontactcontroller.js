


exports.getaboutpage = (req,res)=>{
   res.render('About',{verifuser: req.session.achrefid })
}


exports.getcontactpage = (req,res)=>{
    res.render('contact',{verifuser: req.session.achrefid })
 }
 