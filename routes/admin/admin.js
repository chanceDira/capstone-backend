import express from "express";
import adminController from '../../controllers/adminController.js';
import authentication from "../../middlewares/auth.js";

const router = express.Router();

/** 
* @swagger
 * components:
 *   schemas:
 *     Dashboard:
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
 * /admin:
 *   get:
 *     summary: Returns all blogs
 *     tags: [Dashboard]
 *     responses:
 *       200:
 *         description: The list of the Blogposts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dashboard'
 */
router.get('/', adminController.getBlogs);

/**
 * @swagger
 * /admin/blogpost?id={id}:
 *   get:
 *     summary: Returns single blog post
 *     tags: [Dashboard]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Id of the single blog post    
 *     responses:
 *       200:
 *         description: Details for single Blogpost
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dashboard'
 *       404:
 *         description: The Blog post was not found
 */

router.get('/blogpost', adminController.singleBlog);

/**
 * @swagger
 * /admin/newblog:
 *   post:
 *     summary: Create a new Blog
 *     tags: [Dashboard]
 *     parameters:
 *      - in: header
 *        name: token
 *        schema:
 *          type: string
 *        required: true
 *        description: Auth-token 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dashboard'
 *     responses:
 *       200:
 *         description: The Blog was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dashboard'
 *       500:
 *         description: Some server error
 */
router.post('/newblog', authentication, adminController.createNewBlogPost);

/**
 * @swagger
 * /admin/deleteblog:
 *  delete:
 *    summary: Delete a blog post
 *    tags: [Dashboard]
 *    parameters:
 *      - in: header
 *        name: token
 *        schema:
 *          type: string
 *        required: true
 *        description: Auth-token
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Dashboard'
 *    responses:
 *      200:
 *        description: The Blog was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Dashboard'
 *      404:
 *        description: The Blog was not found
 *      500:
 *        description: Some error happened
 */
router.delete('/deleteblog', authentication, adminController.deleteBlogPost);

/**
 * @swagger
 * /admin/updateblog:
 *  put:
 *    summary: Update a blog post
 *    tags: [Dashboard]
 *    parameters:
 *      - in: header
 *        name: token
 *        schema:
 *          type: string
 *        required: true
 *        description: Auth-token
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Dashboard'
 *    responses:
 *      200:
 *        description: The Blog was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Dashboard'
 *      404:
 *        description: The Blog was not found
 *      500:
 *        description: Some error happened
 */

router.put('/updateblog', authentication, adminController.updateBlogPost);

export default router