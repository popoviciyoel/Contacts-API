const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const authorsRouter = require('./routes/api/v1/contacts');

// Set-up middleware stack
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1/contacts', authorsRouter)


const dbuser = 'dbadmin'
const dbpass = 'dbpassword'


// TODO
//Replace this connection string with your own instance


const uri = `mongodb+srv://${dbuser}:${dbpass}@cluster0.jrvsb.mongodb.net/contacts?retryWrites=true&w=majority`;

mongoose.connect(uri , { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


module.exports = app;
