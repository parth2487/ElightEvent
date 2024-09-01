
 import db from '../config/db.js';
// // POST request to store feedback
// export const postfeedback=(req,res)=>{
//   const { eventID, msg, userEmail } = req.body;
//     console.log(eventID,msg,userEmail)
//   if (!eventID || !msg || !userEmail) {
//     return res.status(400).json({ message: 'Event ID, feedback, and user email are required.' });
//   }

//   const query = `
//     INSERT INTO feedback(eventID, msg, userEmail)
//     VALUES (?, ?, ?)
//   `;

//   db.query(query, [eventID, msg, userEmail], (err, results) => {
//     if (err) {
//       console.error('Error storing feedback:', err);
//       return res.status(500).json({ message: 'Error storing feedback' });
//     }

//     res.status(201).json({ message: 'Feedback stored successfully', feedbackID: results.insertId });
//   });
// }


export const postfeedback = (req, res) => {
  const { eventID, msg, userEmail } = req.body;
  
  console.log('Received Feedback:', { eventID, msg, userEmail });

  if (!eventID || !msg || !userEmail) {
    return res.status(400).json({ message: 'Event ID, feedback, and user email are required.' });
  }

  const query = `
    INSERT INTO feedback (eventID, msg, userEmail)
    VALUES (?, ?, ?)
  `;

  db.query(query, [eventID, msg, userEmail], (err, results) => {
    if (err) {
      console.error('Error storing feedback:', err);
      return res.status(500).json({ message: 'Error storing feedback' });
    }

    console.log('Feedback stored:', results.insertId);
    res.status(201).json({
      message: 'Feedback stored successfully',
      feedbackID: results.insertId,
    });
  });
};

