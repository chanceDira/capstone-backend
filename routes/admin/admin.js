import express from "express";
import adminController from '../../controllers/adminController.js';
import authentication from "../../middlewares/auth.js";

const router = express.Router();

router.get('/', adminController.getBlogs);
router.post('/newblog', authentication, adminController.createNewBlogPost);
router.delete('/deleteblog', adminController.deleteBlogPost);
router.put('/updateblog', adminController.updateBlogPost);

export default router