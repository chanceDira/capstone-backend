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
        res.status(200).json({"status": "success","code": 200,"message": "Blog post created !!", "data": newBlogPost});
    }
    catch(error){
        console.log(error)
        res.status(500).json({"message" : "Error"});
    }
}

const getBlogs = async (req,res) => {
    // res.json(blogs);
    
    try {  
       const data = await Blogs.find({}).limit(14);
        res.status(200).json(data);
    }
    catch(error){
        console.log(error)
        res.status(500).json({"message" : "Error"});
    }
}

const singleBlog = async (req,res) => {
    // res.json(blogs);
    
    let id = req.query.id;
    try {  
       const data = await Blogs.find({_id : id}).limit(4);
        res.status(200).json(data);
    }
    catch(error){
        console.log(error)
        res.status(500).json({"message" : "Error"});
    }
}

const deleteBlogPost = async (req , res) => {
    try {
        let id = req.body.id;
        let query = {_id: id};
        if(id.trim() === '' || id.trim() === null){
            res.status(400).json({'error' : "Bad request"});
            return;
        }
        let data = await Blogs.deleteOne(query);
        if(data.deletedCount === 1 ){
            res.status(200).json({"success" : "deleted"});
            return;
        }
        else{
            res.status(404).json({"error" : 'we don\'t have that blog'});
            return;
        }
    } catch (error) {  
        console.log(error)
        res.status(500).json({"error" : 'Server error'});        
    }
}

const updateBlogPost = async (req , res) => {
    const { blogImage, title, subTitle, blogPost } =  req.body;
    
    try {
        let id = req.body.id;
        let data = await Blogs.findOneAndUpdate(
            {_id : id},
            {$set:{ blogImage, title, subTitle, blogPost } });
            if(data){
                res.status(200).json({"success" : "Updated" });
                return;
            }
    } catch (error) {  
        res.status(500).json({"error" : 'Server error'});        
    }
}

export default { getBlogs, createNewBlogPost, deleteBlogPost, updateBlogPost, singleBlog }
