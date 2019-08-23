var express = require('express');
var app = new express();
var router = express.Router()
PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log('Server listening at 4000');
})

app.get('/', (request, response)=>{
    response.status(200).json({message: 'Get request working'})
})
