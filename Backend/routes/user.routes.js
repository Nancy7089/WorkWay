import express from 'express';
import { getProfile, getAllUsers } from '../controllers/user.controller.js';
import { protect } from '../middleware/protect.js';

const router = express.Router();

router.get('/profile', protect, getProfile);
router.get('/', protect, getAllUsers);

export default router;
