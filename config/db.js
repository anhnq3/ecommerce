const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DATABASE
})

db.connect((error) => {
    if(error){
        console.log(error)
    }
    else{
        console.log('Connecting to database')
    }
})

module.exports = db