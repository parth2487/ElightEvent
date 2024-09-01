// import db from '../config/db.js';

// const takesignindata = (req, res) => {
//   const { email, password } = req.body;
  
// console.log(email)
//   // Check if the user exists with the given email and password
//   const checkUserQuery = 'SELECT * FROM user WHERE email = ? AND password = ?';
//   db.query(checkUserQuery, [email, password], (err, results) => {
//     if (err) {
//       console.error('Error checking user:', err);
//       return res.status(500).json({ message: 'Server error' });
//     }

//     if (results.length === 0) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     // Assuming successful login
//     const user = results[0]; // Extract the user data from the query result

//     // Here you can generate a token, but for now we'll return a dummy token
//     const token = 'dummy-token'; // Replace with actual token generation logic

//     // Extract the role from the user data
//     const role = user.role;
//     console.log(role)

//     // Respond with the token and user role
//     res.status(200).json({ message: 'Sign-in successful', token, role });
//   });
// };

// export { takesignindata };




// signin.js (or your relevant file)
import db from "../config/db.js";// adjust path as needed

export const takesignindata = async (req, res) => {
  const { email, password } = req.body;

  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password]);
    connection.release();

    if (rows.length > 0) {
      const user = rows[0]; // Assuming there is only one user with the given email and password

      // Send back user details along with the token
      res.status(200).json({
        message: 'Sign-in successful',
        token: 'your_token_here',
        user: {
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role
          // Add other details as needed
        }
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error during sign-in:', error); // Log the error for debugging
    res.status(500).json({ message: 'Internal server error', error });
  }
};
