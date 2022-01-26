import { v4 as uuid } from 'uuid';
import users from '../models/signup.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'





const register = async (req , res) => {
    const { fullName, email, password  } =  req.body;
    try {
        // validations
        if(!(password || fullName || email)){
            res.status(400).json({'status': 'fail','code': 400,'message' : "Please fill all required data", "data": null});
            return;
        }   
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);  
        const saveData = new users({
                password: hashedPassword,
                fullName,
                email 
            });
        const savedData = await saveData.save();  
        res.status(200).json({'status': 'success','code': 200,'message' : "Registered !!!", "data": null});
    }
    catch(error){
        console.log(error)
        res.status(500).json({'status': 'fail','code': 500,'message' : "error", "data": null});
    }
}

const login = async (req , res) => {
    const { email, password  } =  req.body;
    try {  
        const emailExist = await users.findOne({email : email});
        if(!emailExist) return res.status(400).json({'status': 'fail','code': 400,'message' : "email not found", "data": null});
        const passwordMatch = await bcrypt.compare(password,emailExist.password);
        if(!passwordMatch) return res.status(401).json({'status': 'fail','code': 401,'message' : "incorrect password", "data": null});
        // setting token
        const token = jwt.sign({_id : emailExist._id},process.env.USER_TOKEN);
        res.header('auth-token',token).status(200).json({'status': 'success','code': 200,'message' : "user logged in", "data": {"token" : token }});
    } catch (error) {    
        console.log(error)
        res.status(500).json({'status': 'fail','code': 500,'message' : "error", "data": null});    
    }
}



export default { register, login }
