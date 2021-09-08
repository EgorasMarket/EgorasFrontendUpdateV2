const Sequelize = require("sequelize");
const config = require("config");
const db = {};
const sequelize = new Sequelize(config.get('DatabaseName'), config.get('DatabaseUser'), config.get('DatabasePassword'), {
    host: config.get('DatabaseHost'), dialect: config.get('DatabaseDialect'), operatorsAliases: 0,
    // pool: {
    //     max: 5,
    //     min: 0,
    //     acquire: 30000,
    //     idle: 10000
    // }
    freezeTableName: false
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {

        console.error('Unable to connect to the database:', err);
        process.exit(1);
    });
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
