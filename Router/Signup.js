import express from 'express';
// import  takesignupdata  from '../container/Signup.js';
import { takesignupdata } from '../container/Signup.js';
// import  takesignindata  from '../container/Signin.js';
// import { takesignindata } from '../container/Signin.js';

const signuprouter = express.Router();
// const signinrouter = express.Router();

// POST /signup route to handle signup form submission
signuprouter.post('/', takesignupdata);
// signinrouter.post('/', takesignindata);


export default signuprouter;
