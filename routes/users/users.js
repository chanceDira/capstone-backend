import express from "express";
import userController from '../../controllers/userController.js';
import adminController from '../../controllers/adminController.js';
import authentication from "../../middlewares/auth.js";

const router = express.Router();


/** 
* @swagger
 * components:
 *   schemas:
 *     Users/Clients:
 *       type: object
 *       required:
 *         - authorId
 *         - blogImage
 *         - title
 *         - subTitle
 *         - blogPost
 *       properties:
 *         authorId:
 *           type: string
 *           description: Author ID
 *         blogImage:
 *           type: string
 *           description: Image of the blog
 *         title:
 *           type: string
 *           description: title of the blog
 *         subTitle:
 *           type: string
 *           description: blog subtitle
 *         blogPost:
 *           type: string
 *           description: contents of the blog
 *       example:
 *         authorId: d5fE_aszhjgggggbjasgj989870
 *         blogImage: png/jpeg
 *         title: how to learn css
 *         subTitle: types of css
 *         blogPost: Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without
 *  
 *     contact:
 *       type: object
 *       required:
 *         - authorId
 *         - blogImage
 *         - title
 *         - subTitle
 *         - blogPost
 *       properties:
 *         authorId:
 *           type: string
 *           description: Author ID
 *         blogImage:
 *           type: string
 *           description: Image of the blog
 *         title:
 *           type: string
 *           description: title of the blog
 *         subTitle:
 *           type: string
 *           description: blog subtitle
 *         blogPost:
 *           type: string
 *           description: contents of the blog
 *       example:
 *         authorId: d5fE_aszhjgggggbjasgj989870
 *         blogImage: png/jpeg
 *         title: how to learn css
 *         subTitle: types of css
 *         blogPost: Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without
 *                          
 */

//get blogpost

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Returns all blogs
 *     tags: [Users/Clients]
 *     responses:
 *       200:
 *         description: The list of the Blogposts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Users/Clients'
 */
router.get('/', adminController.getBlogs);
router.post('/contactUs', userController.newMessage);
router.post('/newsletter', userController.newsLetterEmail);
router.post('/newcomment', authentication, userController.newComment);
router.get('/comments', userController.getComments);


export default router