
const { default: mongoose } = require('mongoose');
var mangoose = require('mongoose')
var signinschema = mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:Number
    }
});

let signinmodel = mongoose.model('signin', signinschema );
module.exports=signinmodel;