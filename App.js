import express from 'express';
import bodyParser from 'body-parser';
// import {signuprouter, signinrouter } from './Router/Signup.js';
import cors from 'cors'
import packageRouter from './Router/Package.js';
import eventRouter from './Router/Getevents.js';
import feedbackrouter from './Router/Feedback.js';
import purchasepcgrouter from './Router/Purchase_package.js';
import postfeedbackrouter from './Router/Postfeedback.js';
import signuprouter from './Router/Signup.js';
import signinrouter from './Router/Signin.js';
import suplistrouter from './Router/Sup_list.js';
import supfeedbackRouter from './Router/Sup_feedback.js';
import countrouter from './Router/Count.js';
import addpackge from './container/Addpackge.js';
import purchaseeventrouter from './Router/Purchase_event.js';
import myorderrouter from './Router/Myorder.js';
console.log("hello")
const app = express();
app.use(express.json())
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
// Routes
app.use('/signup', signuprouter);
app.use('/signin',signinrouter);
app.use('/packages',packageRouter);
app.use('/events',eventRouter);
app.use('/feedback',feedbackrouter);
app.use('/postfeedback',postfeedbackrouter)
app.use('/purchased_package',purchasepcgrouter)
app.use('/orders',suplistrouter)
app.use('/supfeedback',supfeedbackRouter)
app.use('/total',countrouter)
app.use('/addPackage',addpackge)
app.use('/purchase_event',purchaseeventrouter)
app.use('/myorders',myorderrouter)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
