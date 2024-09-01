import db from "../config/db.js";

export const Sup_feedback = async (req, res) => {
  const { supplierId } = req.query;
  console.log("suuplier id",supplierId)

  try {
    // Query to get feedback related to the supplier
    const [feedbacks] = await db.query(
      `SELECT f.eventID, f.msg, f.userEmail, s.name AS supplierName
       FROM feedback f
       JOIN supplier s ON f.eventID = s.eventID
       WHERE s.supplierEmail = ?`,
      [supplierId]
    );

    res.json(feedbacks);
  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    res.status(500).send('Server Error');
  }
};
