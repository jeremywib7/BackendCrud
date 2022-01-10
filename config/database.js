import { Sequelize } from "sequelize";

const db = new Sequelize('reactexpress', 'root', '' ,{
    host: "localhost",
    dialect: "mysql"
});

export default db;