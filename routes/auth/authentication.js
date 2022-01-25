import express from "express";
import authController from '../../controllers/authController.js'
const router = express.Router();


/** 
* @swagger
 * components:
 *   schemas:
 *     Authentication:
 *       type: object
 *       required:
 *         - fullName
 *         - email
 *         - password
 *       properties:
 *         fullName:
 *           type: string
 *           description: Fullname
 *         email:
 *           type: string
 *           description: Email
 *         password:
 *           type: string
 *           description: password
 *       example:
 *         fullName: CYIFUZO Jean Damascene
 *         email: cyifuzo@gmail.com
 *         password: 1234456789
 *         
 */

router.post('/', authController.register);

/**
 * @swagger
 * /authentication/login:
 *   post:
 *     summary: Login
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Authentication'
 *     responses:
 *       200:
 *         description: The Blog was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Authentication'
 *       500:
 *         description: Some server error
 */

router.post('/login', authController.login);


export default router