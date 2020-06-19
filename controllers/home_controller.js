const TODO = require("../models/todo");

// controller to home page on "/" req through router
module.exports.home = function(req, res){
    return res.render('home', {
        title: "TODO APP"
    });
}

// controller to create TODO 



// controller to delete TODO



//module.exports.actionName = function(req,res){}