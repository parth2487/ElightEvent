
import express from 'express';
import myorder from '../container/Myorder.js';
// import { sup_list } from '../container/Sup_list.js';

const myorderrouter = express.Router();
console.log('packg')
// Route for fetching packages
myorderrouter.get('/', myorder);

export default myorderrouter;