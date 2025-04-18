import { Sequelize } from "sequelize";

const sequelize = new Sequelize("xongarden", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default { sequelize, connectDB };
