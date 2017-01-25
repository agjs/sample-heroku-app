let express = require('express');
let app = express();

app.get('/', function(req, res){
    res.send('Express application on Heroku!');
});


app.listen(3000, function(){
    console.log('Express!');
});