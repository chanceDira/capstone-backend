import express from "express";
import bodyParser from 'body-parser'
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from "swagger-jsdoc";
import users from './routes/users/users.js';
import admin from './routes/admin/admin.js';
import auth from './routes/auth/authentication.js'

// const express = require("express");
// const users = require('./routes/users/users');
// const admin = require('./routes/admin/admin');

const PORT = process.env.PORT || 7000;
const app = express();

const options = {
   definition: {
       openapi: '3.0.0',
       info: {
           title: 'My Brand - Capstone Project Backend',
           version: '1.0.0',
           description: 'Capstone backend Express Library API'
       },
       servers: [
        {
        //    url: `https://capstone-backend-andela.herokuapp.com`,
           url: 'http://localhost:7000/api/v1'
        
        }], 
        components: {
          securitySchemes: {
            bearerAuth: {
              type: 'http',
              scheme: 'bearer',
              in: 'header',
              bearerFormat: 'JWT'
            }
          }
        },
        security: [
          {
            bearerAuth: []
          }
        ], 
   },
  
   apis: ["./routes/admin/*.js", './routes/users/*.js','./routes/auth/*.js']     
}
//'./routes/users/*.js','./routes/auth/*.js
const specs = swaggerJsDoc(options)
app.use('/api/v1/doc', swaggerUI.serve, swaggerUI.setup(specs));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());



app.use('/api/v1/admin', admin);
app.use('/api/v1/users', users);
app.use('/api/v1/authentication', auth);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

export default app

