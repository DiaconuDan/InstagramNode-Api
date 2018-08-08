const express = require('express');
const app = express();
const auth = require('./app/services/authService');


app.get('/authorize_user', auth.authorize_user);
app.get('/handleAuth', auth.handleauth);


app.listen(8000, function(err) {
    if(err) {
      console.log("Error");
    }
    else{
      console.log("Listening on port 8000");
    }
});


