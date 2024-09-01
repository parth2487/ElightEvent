// const express = require('express');
import express from 'express';
import { countevent, countuser } from '../container/Count.js';
const countrouter = express.Router();
// Assuming you have a `db.js` file for the MySQL connection

// Route to get total users count


countrouter.get('/user',countuser)
countrouter.get('/event',countevent)
export default countrouter;

// Route to get total events count
