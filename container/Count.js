import db from "../config/db.js"
console.log("user-evemts")
const countuser=async(req,res)=>{
    try {
        const [rows] = await db.query('SELECT COUNT(*) as count FROM user');
        res.json({ totalUsers: rows[0].count });
      } catch (error) {
        res.status(500).json({ error: 'Error fetching total users' });
      }
}


const countevent=async(req,res)=>{
    try {console.log("inside")
        const [rows] = await db.query('SELECT COUNT(*) as count FROM events');
        console.log(rows)
        res.json({ totalEvents: rows[0].count });
      } catch (error) {
        res.status(500).json({ error: 'Error fetching total events' });
      }

}

export {countevent,countuser};