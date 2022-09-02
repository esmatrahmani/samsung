var mongoose = require('mongoose');
var regschema = mongoose.Schema({
    name:{
        type: String
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    }
})

var regModel = mongoose.model('adill',regschema);
module.exports=regModel;