const express = require('express')
const cors = require('cors')
const userRoute = require('./routes/user.route');

const app = express();
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(cors());
app.use('/user', userRoute);
let port = 3000;

const server = app.listen(port, function(){
    console.log('Listening on port ' + server.address().port);
});