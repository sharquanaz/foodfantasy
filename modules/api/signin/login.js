/*var mongoose = require('mongoose');
var login ={
    title:'login',
    statusCode:200
}
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/LogIn',{useMongoClient:true});

var myData = mongoose.Schema({
    
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    },
    password:{
        type:String,
        required:true,
        min:8
    }
   
},{collection:'Data'});

var model = mongoose.model('Data',myData);

login.getData = function(req,res){  
    
        var body=req.body;
    
        var db={
            email:body.email,
            password:body.password
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
    
    module.exports = login;
    */