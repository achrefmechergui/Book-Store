const bookmodel = require('../models/bookmodel')

exports.allbookcontroller = (req,res)=>{
    bookmodel.getallbooks().then((alldocs)=>{
        if (alldocs&&alldocs.length>0){
            res.render('ourbooks',{allbooks:alldocs,verifuser: req.session.achrefid})
        }
        else {
            res.render('ourbooks',{allbooks:[]})
        }
    })
}



exports.onebookdetailcontroller = (req,res)=>{
    let id = req.params.id
    console.log("le id :",id)
    bookmodel.getbookdetails(id).then((onebook)=>{
        console.log(onebook)
       res.render('detail',{thebook:onebook,verifuser: req.session.achrefid})
      
    })
}