const express = require('express');

const chart=require('./routes/chartRoute')

const db=require('./db/db')
require('dotenv').config()


const app = express();

app.use('/chart', chart);
app.use(express.json());

const port = process.env.PORT || 4000;
app.use(express.json());
app.use(express.static('public'))



app.listen(port,()=>console.log('server listening on port '+port))