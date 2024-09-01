// import mysql from 'mysql2/promise';

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'elite_event'
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   }
//   console.log('Connected to MySQL');
// });

// export default db;


import mysql from 'mysql2/promise';

// Create a connection pool
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'elite_event',
  waitForConnections: true,
  connectionLimit: 50,
  queueLimit: 0
});

export default db;
