import mysql from  "mysql"

export const db = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "85120358",
    database: "crud"
})