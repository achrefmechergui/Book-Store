const bookmodel = require("../models/bookmodel");

exports.threebookcontroller = (req, res) => {
  bookmodel.getthreebooks().then((data) => {
    if (data && data.length > 0) {
      res.render("index", { books: data, verifuser: req.session.achrefid });
    } else {
      res.render("index", { books: [] });
    }
  });
};

// getallbooks() bel akwess khater mghir akwess twali koulch alik atitha properiete essemha 'then'
// w zeda bech nkoulou baad eresultat weli hiya matatla3 ken mayssirel ha execussion
// a3meli haja (.then()....)
