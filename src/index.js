const express = require('express');
const bodyParser = require('body-parser');
const router=require('./routes/route.js')
const mongoose = require('mongoose');
// const multer = require('multer');
const app = express();

app.use(bodyParser.json());
// app.use(multer().any());
mongoose.connect("mongodb+srv://AkshayMakwana:Akshay123@cluster0.zmta9.mongodb.net/project2-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', router)


app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});   