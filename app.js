var express = require('express');
var app = new express();
var router = express.Router()

app.listen(4000, ()=>{
    console.log('Server listening at 4000');
})

app.get('/', (request, response)=>{
    response.status(200).json({message: 'Get request working'})
})
