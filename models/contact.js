var mongoose = require('mongoose');



let contactschema =  mongoose.Schema({

    name:{
        type: String
    },
    email:{
        type: String
    },
    
    message:{
        type:String
    }
});

let contactmodel = mongoose.model('contact', contactschema );
module.exports=contactmodel;