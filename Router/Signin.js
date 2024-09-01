import express from 'express';

import { takesignindata } from '../container/Signin.js';


const signinrouter = express.Router();


signinrouter.post('/', takesignindata);


export default signinrouter;
