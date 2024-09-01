import db from "../config/db.js";

export const getevents = async (req, res) => {
  try {
    console.log("Executing query...");

    const query = `
      SELECT 
        s.userID, 
        s.\`event-id\` AS eventID, 
        s.name AS supplier_name,
        pd.eventID, 
        pd.eventName,
        pd.price
      FROM 
        supplier s
      JOIN 
        events pd ON s.\`event-id\` = pd.eventID
    `;
    
    const [events] = await db.query(query);
    
    console.log("Query executed. Fetched events:", events);
    
    res.json(events);
  } catch (err) {
    console.error('Error fetching events:', err);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
};
