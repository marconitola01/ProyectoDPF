import express from 'express';
import generateImage from '../controllers/openAiController.js';

const router = express.Router();

router.post("/generate",generateImage);

router.post("/chat", );



export default router;

