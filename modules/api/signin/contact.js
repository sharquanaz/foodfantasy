/*var mongoose = require('mongoose');
var contact ={
    title:'contact',
    statusCode:200
}
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/ContactPage',{useMongoClient:true})

var myData = mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true,
        minlenght:1
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        min:8
    },
    repassword:{
        type:String,
        required:true,
        min:8
    },
    contactno:{
        type:String,
        required:true,
        unique: true,
        max:11
    },
    description:{
        type:String,
        required:true
    }
},{collection:'Data'});

var model = mongoose.model('Data',myData);

contact.addData = function(req,res){

    var body=req.body;

    var db={
        name:body.name,
        email:body.email,
        password:body.password,
        repassword:body.password,
        contactno:body.contactno,
        description:body.description
    }

    var save = new model(db);
    save.save(function(err,db1){
        if(err){
            res.send({
                statusCode:500,
                message:"Couldn't find data"
            })
        }else{
            res.send({
                statusCode:200,
                message:"Data successfully saved",
                db:db1
            })
        }

    })
}

module.exports = contact;
*/