import db from "../config/db.js";


const myorder=async(req,res)=>{

    const userEmail = req.query.email;
    console.log(userEmail)

    if (!userEmail) {
      return res.status(400).json({ error: 'User email is required' });
    }
  
    try {
      // Fetch orders from purchase_package
      const [packages] = await db.query(
        'SELECT * FROM purchased_package WHERE userID= ?',
        [userEmail]
      );
  
      // Fetch orders from purchase_event
      const [events] = await db.query(
        'SELECT * FROM puchased_event WHERE userID = ?',
        [userEmail]
      );
  
      res.status(200).json({
        packages,
        events,
      });
    } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
}

export default myorder;