import dotEnv from 'dotenv';
import mongoose from 'mongoose';
import blogs  from '../models/blogs.js';

dotEnv.config();
mongoose.connect(process.env.CONNECTION , {useNewUrlParser: true , useUnifiedTopology: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console , 'connection error') );
db.once('open' , function() {
    console.log('Connected');
}) 

export default db
