//A route defines an API endpoint and HTTP method.
//If this type of request comes in, send it to this controller

import { register, login } from '../controllers/auth.controller.js';
import express from 'express'
const router = express.Router();
router.post('/register',register);
router.post('/login',login);
export default router;