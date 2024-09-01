// import db from '../config/db.js'; 

// export const getPackages = async (req, res) => {
//   try {
//     const [packages] = await db.query('SELECT * FROM package_details');
//     console.log(packages)
//     res.json(packages);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Failed to fetch packages' });
//   }
// };


import db from '../config/db.js';

export const getPackages = async (req, res) => {
  try {
    // Query to join package_details and events tables
    const query = `
      SELECT 
        pd.package_id, 
        pd.event_id, 
        pd.star,
        e.eventName AS event_name,
        e.price
      FROM 
        package_details pd
      JOIN 
        events e ON pd.event_id = e.eventID
    `;
    
    // Execute the query
    const [packages] = await db.query(query);
    
    // Log the packages data
    console.log(packages);
    
    // Send the combined data as a JSON response
    res.json(packages);
  } catch (err) {
    console.error('Error fetching packages:', err);
    res.status(500).json({ error: 'Failed to fetch packages' });
  }
};
