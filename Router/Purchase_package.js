import express from 'express';
import { purchase_package } from '../container/Purchase_packge.js';
const purchasepcgrouter = express.Router();
// const { createPurchase } = require('./purchaseController');
console.log("hello purchase..............")
// Endpoint to handle package booking
purchasepcgrouter.post('/', purchase_package);

export default purchasepcgrouter;
