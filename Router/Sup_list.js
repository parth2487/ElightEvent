
import express from 'express';
import { sup_list } from '../container/Sup_list.js';

const suplistrouter = express.Router();
console.log('packg')
// Route for fetching packages
suplistrouter.get('/', sup_list);

export default suplistrouter;