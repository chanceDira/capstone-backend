import express from "express";
import bodyParser from 'body-parser'
import users from './routes/users/users.js';
import admin from './routes/admin/admin.js';

// const express = require("express");
// const users = require('./routes/users/users');
// const admin = require('./routes/admin/admin');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());

app.use('/api/v1/admin', admin);
app.use('/api/v1/users', users);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})

