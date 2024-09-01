import express from 'express';
import { getevents } from '../container/Getevent.js';
import putevent from '../container/Putevent.js';
// import { getPackages } from '../container/Package_detail.js';
// import { getPackages } from '../controllers/packageController.js';

const eventRouter = express.Router();
console.log('packg')
// Route for fetching packages
eventRouter.get('/', getevents);
eventRouter.post('/putevent',putevent)

export default eventRouter;