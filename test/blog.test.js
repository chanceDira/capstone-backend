process.env.NODE_ENV = 'test';

// import mongoose from 'mongoose'
// import blogPost from '../models/blogs.js'
// import fs from 'fs'
import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../app.js'
// import jwt from 'jsonwebtoken'
let should = chai.should();
// import dotenv from 'dotenv';
// dotenv.config();
let testId1="";
let testErrorID="ad"
chai.use(chaiHttp);
chai.should();
chai.use(chaiHttp);

describe('Articles handling', () => {
    it('it should GET all the Articles', (done) => {
      chai.request(app)
      .get('/api/v1/users/')
      .end((err, res) => {
            res.should.have.status(200);
        done();
      });
    }) 

})