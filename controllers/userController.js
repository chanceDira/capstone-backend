import { v4 as uuid } from 'uuid';
import contacts from '../models/contact.js';
import adminController from './adminController.js';


const getBlogs = adminController.getBlogs;

const newMessage = async (req , res) => {
    const message =  req.body;
    try {
        // validations
        if(!message){
            res.status(400).json({'message' : "Please fill all required data"});
            return;
        }     
        await contacts.insertMany([ message ]);
        res.status(200).json(message);
    }
    catch(error){
        console.log(error)
        res.status(500).json({"message" : "Error"});
    }
}

export default { getBlogs, newMessage }
