import express from 'express';
import Purchase_event from '../container/Purchase_event.js';
// import addpackge from '../container/Addpackge.js';




const purchaseeventrouter= express.Router();

// Route to get feedback details
// feedbackrouter.get('/', getFeedback);
purchaseeventrouter.post('/',Purchase_event)

export default purchaseeventrouter;