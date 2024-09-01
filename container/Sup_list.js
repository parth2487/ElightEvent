import db from "../config/db.js";


export const sup_list=async (req,res)=>{
    try {
        console.log(req.query.supplierId)
        const [packages] = await db.query('SELECT * FROM purchased_package WHERE userID = ?', [req.query.supplierId]);
        const [events] = await db.query('SELECT * FROM puchased_event WHERE userID= ?', [req.query.supplierId]);
        

        console.log(events,packages)
        res.json({ packages, events });
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch orders' });
      }


}

// import db from "../config/db.js";

// export const sup_list = async (req, res) => {
//   try {
//     const supplierId = req.query.supplierId;
    
//     // Query to join purchased_package with purchased_event on event_id
//     const [orders] = await db.query(`
//       SELECT 
//         p.package_id, 
//         p.event_id,
//         e.event_name,
//         p.price,
//         p.start_date,
//         p.end_date
//       FROM 
//         purchased_package p
//       JOIN 
//         purchased_event e
//       ON 
//         p.event_id = e.event_id
//       WHERE 
//         p.userID = ?`, [supplierId]);

//     // Separate into packages and events
//     const packages = orders.filter(order => order.package_id !== null);
//     const events = orders.filter(order => order.package_id === null);

//     res.json({ packages, events });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch orders' });
//   }
// };
