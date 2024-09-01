import db from "../config/db.js";

const putevent = async (req, res) => {
  const { event_id, event_name, event_price, user_email, user_firstname } = req.body;

  if (!event_id || !event_name || !event_price || !user_email || !user_firstname) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // First, insert the event if it doesn't exist
  const [eventResult] = await db.query(
    'INSERT IGNORE INTO events (eventID, eventName, price) VALUES (?, ?, ?)',
    [event_id, event_name, event_price]
  );

  // Then, insert the supplier record
  const [supplierResult] = await db.query(
    'INSERT INTO supplier (`event-id`, userID, name) VALUES (?, ?, ?)',
    [event_id, user_email, user_firstname]
  );

  res.status(201).json({
    message: 'Event and supplier data added successfully',
  });
};

export default putevent;
