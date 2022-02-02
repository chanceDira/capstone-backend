import { v4 as uuid } from 'uuid';
import contacts from '../models/contact.js';
import comments from '../models/comments.js';
import newsLetters from '../models/newsletter.js';
import adminController from './adminController.js';


const getBlogs = adminController.getBlogs;

const newMessage = async (req , res) => {
    const { message,fullName,email } =  req.body;
    try {
        // validations
        if(!(message || fullName || email)){
            res.status(400).json({'status': 'fail','code': 400,'message' : "Please fill all required data", "data": null});
            return;
        }     
        const saveData = new contacts({
                message,
                fullName,
                email 
            });
        const savedData = await saveData.save();  
        res.status(200).json({'status': 'success','code': 200,'message' : "Message sent !!!", "data": {"contact": savedData}});
    }
    catch(error){
        console.log(error)
        res.status(500).json({"message" : "Error"});
    }
}

const newsLetterEmail = async (req , res) => {
    const { newsletter } =  req.body;

    try {
        // validations
        if(!newsletter){
            res.status(400).json({'message' : "Please fill all required data"});
            return;
        }     
        const saveData = new newsLetters({
            newsletter
        });
    const savedData = await saveData.save();  
    res.status(200).json({"message": "Subscribed !!", "data": savedData});
    }
    catch(error){
        console.log(error)
        res.status(500).json({"message" : "Error"});
    }
}

const newComment = async (req , res) => {
    const { comment, fullName, email, postId } =  req.body;
    try {
        // validations
        if(!(comment || fullName || email || postId)){
            res.status(400).json({'message' : "Please fill all required data"});
            return;
        }     
        const saveData = new comments({
                comment,
                fullName,
                email,
                postId 
            });
        const savedData = await saveData.save();  
        res.status(200).json({"status": "success","code": 200,"message": "Comment posted !!", "data": {"post": savedData}});
    }
    catch(error){
        console.log(error)
        res.status(500).json({"message" : "Error"});
    }
}

const getComments = async (req,res) => {
    // res.json(blogs);
    
    try {  
       const data = await comments.find({}).limit(4);
        res.status(200).json({"status": "success","code": 200,"message": "All comments", "data": {"posts": data}});
    }
    catch(error){
        console.log(error)
        res.status(500).json({"message" : "Error"});
    }
}

export default { getBlogs, newMessage, newsLetterEmail, newComment, getComments }
