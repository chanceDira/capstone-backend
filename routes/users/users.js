import express from "express";
import userController from '../../controllers/userController.js';
import adminController from '../../controllers/adminController.js';

const router = express.Router();

router.get('/', adminController.getBlogs);
router.post('/contactUs', userController.newMessage);


export default router