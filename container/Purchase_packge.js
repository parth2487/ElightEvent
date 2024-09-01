 // Ensure this path is correct based on your project structure
 import db from '../config/db.js';
// Function to handle package booking
export const purchase_package = async (req, res) => {
  const { package_id, price, start_date, end_date, userID } = req.body;

  if (!package_id || !price || !start_date || !end_date || !userID) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const query = `
    INSERT INTO purchased_package (package_id, price, start_date, end_date, userID)
    VALUES (?, ?, ?, ?, ?)
  `;

  try {
    await db.query(query, [package_id, price, start_date, end_date, userID]);
    res.status(201).json({ message: 'Package booked successfully!' });
  } catch (error) {
    console.error('Error inserting purchase into database:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

