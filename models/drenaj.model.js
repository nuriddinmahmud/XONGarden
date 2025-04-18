import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Drainage = sequelize.define(
  "Drainage",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

    hoursWorked: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    totalSalary: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },

  {
    tableName: "Drainage",
    timestamps: false,
  }
);

export default Drainage;
