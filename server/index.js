const express = require('express');
const Connection = require('./dataBase/db.js');
const cors = require('cors');
const routes = require('./routes/route.js');

const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:true}));

app.use('/',routes);
Connection();
app.listen(3000,()=>{
    console.log('Iam listening in port 3000');
});