import express from 'express';
// import { getFeedback } from '../container/Feedback.js';
import { postfeedback } from '../container/Postfeedback.js';
// import { getFeedback } from '../controllers/feedbackController.js';

const postfeedbackrouter = express.Router();

// Route to get feedback details
// feedbackrouter.get('/', getFeedback);
postfeedbackrouter.post('/',postfeedback)

export default postfeedbackrouter;
