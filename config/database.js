import { Sequelize } from "sequelize"; 

const sequelize = new Sequelize({
  host: "localhost",
  username: "root",
  password: "12345",
  database: "xongarden",
  dialect: "mysql",
  logging: false,
});

export default sequelize;