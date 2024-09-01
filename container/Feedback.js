import db from '../config/db.js';

// Controller to get feedback details
export const getFeedback = async (req, res) => {
  try {


    const query = `
      SELECT 
        f.eventID,
        f.msg,
        f.userEmail,
        e.eventName,
        s.userID,
        s.name as supplierName
      FROM 
        feedback f
      JOIN 
        events e ON f.eventID = e.eventID
      JOIN 
        supplier s ON e.eventID = s.\`event-id\`
    `;

    // Execute the query
    const [feedbackDetails] = await db.query(query);

    // Log the feedback details
    console.log('Fetched Feedback Details:', feedbackDetails);

    // Send the combined data as a JSON response
    res.json(feedbackDetails);
  } catch (err) {
    console.error('Error fetching feedback details:', err);
    res.status(500).json({ error: 'Failed to fetch feedback details' });
  }
};
