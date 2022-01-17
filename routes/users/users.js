import express from "express";
import userController from '../../controllers/userController.js';
import adminController from '../../controllers/adminController.js';

const router = express.Router();

router.get('/', adminController.getBlogs);
router.post('/contactUs', userController.newMessage);
router.post('/newsletter', userController.newsLetterEmail);
router.post('/newcomment', userController.newComment);
router.get('/comments', userController.getComments);


export default router