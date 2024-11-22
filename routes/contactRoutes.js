// routes/contactRoutes.js

import express from 'express';
import { submitContactForm } from '../controllers/contactController.js';
import { validateContactForm } from '../validators/contactValidator.js';

const router = express.Router();
// 
router.post('/', validateContactForm, submitContactForm);

export default router;
