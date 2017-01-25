let express = require('express');
let app = express();

app.get('/', function(req, res){
    res.send('Express application on Heroku!');
});

app.listen(process.env.PORT || 8080, function(){
    console.log('Express!');
});

