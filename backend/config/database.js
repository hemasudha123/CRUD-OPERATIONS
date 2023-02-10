import { Sequelize } from "sequelize";

const db = new Sequelize('mern_db', 'root', 'Hemasudha@123', {
    host: "localhost",
    dialect: "mysql"
});

export default db;