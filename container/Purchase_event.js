import db from '../config/db.js';

const Purchase_event = async (req, res) => {
  const { eventID, userID, start_date, end_date, price } = req.body;

  try {
    // Insert purchase event into the database
    const query = `
      INSERT INTO puchased_event (event_ID, userID, start_date, end_date, price)
      VALUES (?, ?, ?, ?, ?)
    `;
    const [result] = await db.query(query, [eventID, userID, start_date, end_date, price]);

    // Respond with success message
    res.status(201).json({ message: 'Event purchased successfully' });
  } catch (error) {
    console.error('Error creating purchase event:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
}

export default Purchase_event;
