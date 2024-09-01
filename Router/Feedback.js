import express from 'express';
import { getFeedback } from '../container/Feedback.js';
import { postfeedback } from '../container/Postfeedback.js';
// import { getFeedback } from '../controllers/feedbackController.js';

const feedbackrouter = express.Router();

// Route to get feedback details
feedbackrouter.get('/', getFeedback);
feedbackrouter.post('/',postfeedback)

export default feedbackrouter;
