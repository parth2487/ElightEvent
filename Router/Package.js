import express from 'express';
import { getPackages } from '../container/Package_detail.js';
// import { getPackages } from '../controllers/packageController.js';

const packageRouter = express.Router();
console.log('packg')
// Route for fetching packages
packageRouter.get('/', getPackages);

export default packageRouter;
