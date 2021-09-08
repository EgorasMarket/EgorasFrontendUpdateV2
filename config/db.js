const mysql = require('mysql');
const config = require('config');

const DatabaseHost = config.get('DatabaseHost');
const DatabaseUser = config.get('DatabaseUser');
const DatabasePassword = config.get('DatabasePassword');
const DatabaseName = config.get('DatabaseName');

var connection = mysql.createConnection({
    host: DatabaseHost,
    user: DatabaseUser,
    password: DatabasePassword,
    database: DatabaseName
});

const connectDB = async () => {

    try {
        await connection.connect();
        console.log("Database Connected");

    } catch (error) {
        console.log(error);
        // Process exit with failure
        process.exit(1);

    }
}

module.exports = connectDB;