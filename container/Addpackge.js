import db from '../config/db.js';


const addpackge=async(req,res)=>{

    const { packageId, star, events } = req.body;

  try {
    // Insert package details
    for (const event of events) {
      const { eventId, eventName, price } = event;

      // Insert into events table
      await db.query(
        'INSERT INTO events (eventID, eventName, price) VALUES (?, ?, ?)',
        [eventId, eventName, price]
      );

      // Insert into package_detail table
      await db.query(
        'INSERT INTO package_details (event_id, package_id, star) VALUES (?, ?, ?)',
        [eventId, packageId, star]
      );
    }

    res.status(200).json({ message: 'Package added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while adding the package' });
  }

}

export default addpackge;