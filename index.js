const express = require('express');
const app = express();
const port = 3000;

// use express router
app.use('/', require('./routes'));

//set up ejs as our view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//Starting express server
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
})