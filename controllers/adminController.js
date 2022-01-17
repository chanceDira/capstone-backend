import { v4 as uuid } from 'uuid';
import db from '../connection/connection.js'
import Blogs from '../models/blogs.js'



const createNewBlogPost = async (req , res) => {
    const newBlogPost =  req.body;
    try {
        // validations
        if(!newBlogPost){
            res.status(400).json({'message' : "Please fill all required data"});
            return;
        }     
        await Blogs.insertMany([ newBlogPost ]);
        res.status(200).json(newBlogPost);
    }
    catch(error){
        console.log(error)
        res.status(500).json({"message" : "Error"});
    }
}

const getBlogs = async (req,res) => {
    // res.json(blogs);
    
    try {  
       const data = await Blogs.find({}).limit(4);
        res.status(200).json(data);
    }
    catch(error){
        console.log(error)
        res.status(500).json({"message" : "Error"});
    }
}


// exports.getBlogs = getBlogs;

export default { getBlogs,createNewBlogPost }
