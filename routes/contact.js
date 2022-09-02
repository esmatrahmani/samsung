var express = require('express');
const contactmodel = require('../models/contact');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact');
});


router.post('/send' , function(req,res,next){

  let addMsg = new contactmodel({
  name:req.body.name,
  email:req.body.email,
  message:req.body.message
  });

  addMsg.save(()=>{
    res.redirect('/contact')
  })

});



module.exports = router;
