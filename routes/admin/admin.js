import express from "express";
import adminController from '../../controllers/adminController.js';

const router = express.Router();

router.get('/', adminController.getBlogs);
router.post('/newblog', adminController.createNewBlogPost);

export default router