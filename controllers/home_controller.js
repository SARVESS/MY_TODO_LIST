const TODO = require("../models/todo");

// controller to render home page
module.exports.home = function(req, res){

    TODO.find({}, function(err, todos){
        if(err){
            console.log('Error in fetching todos from db');
            return;
        }
        return res.render('home',{
         title: "TODO APP",
         todo_list: todos
        });
    });
}

// controller to create TODO 
module.exports.create = function(req, res){
    TODO.create({
        name: req.body.name,
        date: req.body.date,
        card: req.body.card
    }, function(err, newTODO){
        if(err){
            console.log('error in creating a TODO item!');
            return;
        }
        console.log('*******' , newTODO);
        return res.redirect('back');
    });
}


// controller to delete TODO



//module.exports.actionName = function(req,res){}