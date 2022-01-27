process.env.NODE_ENV = 'test';

// import mongoose from 'mongoose'
// import blogPost from '../models/blogs.js'
// import fs from 'fs'
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../app.js'
// import jwt from 'jsonwebtoken'
// let should = chai.should();
// import dotenv from 'dotenv';
// dotenv.config();

chai.use(chaiHttp);
chai.should();
chai.use(chaiHttp);

describe('1) Testing my Dashboard', () => {
    it('it should GET all the blog posts', (done) => {
      chai.request(app)
      .get('/api/v1/users/')
      .end((err, res) => {
            res.should.have.status(200);
        done();
      });
    }) 

    it('it should GET single blog post', (done) => {
      chai.request(app)
      .get('/api/v1/admin/blogpost?id=61e5a3272a2beb128a3a00d6')
      .end((err, res) => {
            res.should.have.status(200);
        done();
      });
    }) 

    it('Created new blog post', (done) => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU3YmFiYTUyMWIwZjFlMTllM2NlOGMiLCJpYXQiOjE2NDI1OTEwNDZ9.RzP_BkiXT08LCwbFxKtt6O2sKAwjLaZw5WwuGWImP2U"
      chai.request(app).post('/api/v1/admin/newBlog')
        .set({ 'token': token, Accept: 'application/json' })
        .send({
          authorId: "dvvdvb",
          blogImage: "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_960_720.jpg",
          title: "The best technologies to learn in 2022",
          subTitle: "nodejs, reactjs, and mocha",
          blogPost: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        })
        .then((res) => {
          const body = res.body;
          expect(body).to.contain.property('data');
          expect(body).to.contain.property('message');
          done();
        })
        .catch((err) => done(err))
    })


    // it('blog post deleted', (done) => {
    //   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU3YmFiYTUyMWIwZjFlMTllM2NlOGMiLCJpYXQiOjE2NDI1OTEwNDZ9.RzP_BkiXT08LCwbFxKtt6O2sKAwjLaZw5WwuGWImP2U"
    //   chai.request(app).delete('/api/v1/admin/deleteblog')
    //     .set({ 'token': token, Accept: 'application/json' })
    //     .send({
    //       id: "61e5277d65bc8f09b7d8f7cb",
    //     })
    //     .then((res) => {
    //       const body = res.body;
    //       expect(body).to.contain.property('success');
    //       done();
    //     })
    //     .catch((err) => done(err))
    // })

    it('blog post updated', (done) => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU3YmFiYTUyMWIwZjFlMTllM2NlOGMiLCJpYXQiOjE2NDI1OTEwNDZ9.RzP_BkiXT08LCwbFxKtt6O2sKAwjLaZw5WwuGWImP2U"
      chai.request(app).put('/api/v1/admin/updateblog')
        .set({ 'token': token, Accept: 'application/json' })
        .send({
          id: "61eaa6dccd4ada1cbf46cf34",
          blogImage: "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_960_720.jpg",
          title: "The best technologies to learn in 2022. from zero to hero testing",
          subTitle: "nodejs, reactjs, and mocha",
          blogPost: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        })
        .then((res) => {
          const body = res.body;
          expect(body).to.contain.property('status');
          expect(body).to.contain.property('code');
          expect(body).to.contain.property('message');
          expect(body).to.contain.property('data');
          done();
        })
        .catch((err) => done(err))
    })

})

describe('2) Testing my users', () => {
  it('it should GET all comments', (done) => {
    chai.request(app)
    .get('/api/v1/users/comments')
    .end((err, res) => {
          res.should.have.status(200);
      done();
    });
  }) 

  it('Message sent', (done) => {
    chai.request(app).post('/api/v1/users/contactUs')
      .send({
          fullName: "enock buzima",
          email: "enock@gmail.com",
          message: "Hi, can you give us your phone"
      })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('data');
        expect(body).to.contain.property('message');
        done();
      })
      .catch((err) => done(err))
  })

  it('Subscribed for newsletter', (done) => {
    chai.request(app).post('/api/v1/users/newsletter')
      .send({
        newsletter: "otto@gmail.com"
      })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('data');
        expect(body).to.contain.property('message');
        done();
      })
      .catch((err) => done(err))
  })

  it('Comment posted.', (done) => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU3YmFiYTUyMWIwZjFlMTllM2NlOGMiLCJpYXQiOjE2NDI1OTEwNDZ9.RzP_BkiXT08LCwbFxKtt6O2sKAwjLaZw5WwuGWImP2U"
    chai.request(app).post('/api/v1/users/newcomment')
      .set({ 'token': token, Accept: 'application/json' })
      .send({
        "fullName": "Willy shema",
        "email": "willy@gmail.com",
        "comment": "this blog post is essential"
      })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('data');
        expect(body).to.contain.property('message');
        done();
      })
      .catch((err) => done(err))
  })

})

describe('3) Testing authentication', () => {
  it('Registered.', (done) => {
    chai.request(app).post('/api/v1/authentication/')
      .send({
        fullName: "Raissa IRAFAsha",
        email: "raissa@gmail.com",
        password: "123456789"
      })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('data');
        expect(body).to.contain.property('message');
        done();
      })
      .catch((err) => done(err))
  })

  it('Logged in.', (done) => {
    chai.request(app).post('/api/v1/authentication/login')
      .send({
        email: "raissa@gmail.com",
        password: "123456789"
      })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('status');
        expect(body).to.contain.property('code');
        expect(body).to.contain.property('message');
        expect(body).to.contain.property('data');
        done();
      })
      .catch((err) => done(err))
  })

})