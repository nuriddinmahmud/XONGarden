import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  host: "localhost",
  username: "root",
<<<<<<< HEAD
  password: "1234",
=======
  password: "12345",
>>>>>>> 7cb734d7b6540f7b93b971e2d4b5964c72751fc5
  database: "xongarden",
  dialect: "mysql",
  logging: false,
});

export default sequelize;
