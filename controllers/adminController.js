import { v4 as uuid } from 'uuid';
import db from '../connection/connection.js'
import Blogs from '../models/blogs.js'



const createNewBlogPost = async (req , res) => {
    const newBlogPost =  req.body;
    try {
        // validations
        if(!newBlogPost){
            res.status(400).json({'status': 'fail','code': 400,'message' : "Please fill all required data", "data": null});
            return;
        }     
        await Blogs.insertMany([ newBlogPost ]);
        res.status(200).json({"status": "success","code": 200,"message": "Blog post created !!", "data": {"post": newBlogPost}});
    }
    catch(error){
        console.log(error)
        res.status(500).json({'status': 'fail','code': 500, "message" : "Error", "data": null});
    }
}

const getBlogs = async (req,res) => {
    // res.json(blogs);
    
    try {  
       const data = await Blogs.find({}).sort({ _id: -1 }).limit(14);
        res.status(200).json({"status": "success","code": 200,"message": "All Blog posts", "data": {"posts": data}});
    }
    catch(error){
        console.log(error)
        res.status(500).json({'status': 'fail','code': 500, "message" : "Error", "data": null});
    }
}

const singleBlog = async (req,res) => {
    // res.json(blogs);
    
    let id = req.query.id;
    try {  
       const data = await Blogs.find({_id : id}).limit(4);
        res.status(200).json({"status": "success","code": 200,"message": "single blog post", "data": {"post": data}});
    }
    catch(error){
        console.log(error)
        res.status(500).json({'status': 'fail','code': 500, "message" : "Error", "data": null});
    }
}

const deleteBlogPost = async (req , res) => {
    try {
        let id = req.body.id;
        let query = {_id: id};
        if(id.trim() === '' || id.trim() === null){
            res.status(400).json({'status': 'fail','code': 400, "message" : "bad request", "data": null});
            return;
        }
        let data = await Blogs.deleteOne(query);
        if(data.deletedCount === 1 ){
            res.status(200).json({"status": "success","code": 200,"message": "blog post deleted", "data": null});
            return;
        }
        else{
            res.status(404).json({'status': 'fail','code': 404, "message" : "we don\'t have that blog", "data": null});
            return;
        }
    } catch (error) {  
        console.log(error)
        res.status(500).json({'status': 'fail','code': 500, "message" : "server error", "data": null});        
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
                res.status(200).json({"status": "success","code": 200,"message": "blog post updated", "data": {"post": data}});
                return;
            }
    } catch (error) {  
        res.status(500).json({'status': 'fail','code': 500, "message" : "server error", "data": null});        
    }
}

export default { getBlogs, createNewBlogPost, deleteBlogPost, updateBlogPost, singleBlog }
