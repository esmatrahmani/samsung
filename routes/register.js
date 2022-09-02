const { response } = require('express');
var express = require('express');
var router = express.Router();
var registermodel = require('../models/register')

router.get('/', function(req,res,next){
    registermodel.find(function(err,respones){
        res.render('register',{students:respones})
    })
});




router.get('/edit/:id',function(req,res,next){
    registermodel.findOne({_id :req.params.id},(err,respones)=>{
    res.render('edit' , {mydata: respones})
    })
  });




router.post('/update', (req,res,next)=>{
registermodel.findByIdAndUpdate({_id: req.body.id}, {name:req.body.name , lastname:req.body.lastname , email:req.body.email}, ()=>{
    res.redirect('/register');
})
});




router.post('/addstudent', function(req,res,next){
    let addnew = new registermodel({
        name:req.body.name,
        lastname:req.body.lastname,
        email:req.body.email
    })
    addnew.save(()=>{
        res.redirect('/register')
    }

    )
});

router.get('/delete/:id',function(req,res,next){
    registermodel.findOneAndDelete({id:req.params.id},()=>{
        res.redirect('/register')
    })

})

module.exports = router;