var express = require('express');
var router = express.Router();
const signinnmodel = require('../models/signin');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signin');
});

router.post('/send' , function(req,res,next){

  let addMsg = new signinmodel({
  email:req.body.name,
  password:req.body.password,
  
  });

  addMsg.save(()=>{
    res.redirect('/signin')
  })

});

module.exports = router;
