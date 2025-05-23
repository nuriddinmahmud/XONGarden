import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Workers = sequelize.define(
  "Workers",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

    workerCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    salaryPerOne: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    totalSalary: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "workers",
    timestamps: false,
  }
);

export default Workers;
