// import db from "../config/db.js";

// export const takesignupdata = (req, res) => {
//   const {
//     email,
//     password,
//     firstName,
//     lastName,
//     phoneNo,
//     address,
//     city,
//     district,
//     role
//   } = req.body;

//   console.log(email, password, firstName, lastName, phoneNo, address, city, district, role);

//   // Check if the user already exists
//   const checkUserQuery = 'SELECT * FROM user WHERE email = ?';
  
//   db.query(checkUserQuery, [email], (err, results) => {
//     console.log("in")
//     if (err) {
//       console.error('Error checking user:', err.message);
//       return res.status(500).json({ message: 'Server error while checking user' });
//     }

//     if (results.length > 0) {
//       console.log("gadabad")
//       return res.status(400).json({ message: 'User already exists' });
//     }


//     const insertUserQuery = `
//       INSERT INTO user ( address,city, district,email,firstName, lastName, password,  phoneNo,  role)
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
//     `;
//     db.query(insertUserQuery, [address,city, district,email,firstName, lastName, password,  phoneNo,  role], (err, results) => {
//       if (err) {
//         console.error('Error inserting user:', err.message);
//         return res.status(500).json({ message: 'Server error while inserting user' });
//       }
//          console.log("user careted")
//       res.status(201).json({ message: 'User created successfully' });
//     });
//   });
// };


import db from "../config/db.js";

export const takesignupdata = async (req, res) => {
  const {
    email,
    password,
    firstName,
    lastName,
    phoneNo,
    address,
    city,
    district,
    role
  } = req.body;

  console.log(email, password, firstName, lastName, phoneNo, address, city, district, role);

  try {
    const [result] = await db.query(
      'INSERT INTO user (address, city, district, email, firstName, lastName, password, phoneNo, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [address, city, district, email, firstName, lastName, password, phoneNo, role]
    );
    console.log("User created");
    res.status(201).json({ message: 'User created successfully', userId: result.insertId });
  } catch (error) {
    console.error('Error inserting user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
