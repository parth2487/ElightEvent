import express from 'express';
import addpackge from '../container/Addpackge.js';



const addpackgerouter= express.Router();

// Route to get feedback details
// feedbackrouter.get('/', getFeedback);
addpackgerouter.post('/',addpackge)

export default addpackgerouter;