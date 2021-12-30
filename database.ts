import mysql from "mysql";
export const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'ico_structure'
})
conn.connect((err)=>{
    if (err) {
        return console.error('error: ' + err.message);
      }
    
      console.log('Connected to the DataBase.');
    });