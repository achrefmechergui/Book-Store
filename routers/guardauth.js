exports.isauth = (req,res,next)=>{
  if (req.session.achrefid ){
    next()
  } else {
    res.redirect('/login')
  }
}



exports.isnotauth = (req,res,next)=>{
  if (!req.session.achrefid){
    next()
  } else {
    res.redirect('/')
  }
}