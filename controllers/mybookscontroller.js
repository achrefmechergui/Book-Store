
exports.getaddbookpage = (req,res)=>{
   res.render('Addbook',{verifuser: req.session.achrefid })
}


exports.getmybookspage = (req,res)=>{
    res.render('Mybook',{verifuser: req.session.achrefid })
}


exports.postmybook =(req,res)=>{
    console.log(req.body)
    console.log(req.file)
}