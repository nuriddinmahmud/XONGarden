import { DataTypes } from "sequelize";
import sequelize from "../config/database.js"; // ✅ TO‘G‘RI

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
      type: DataTypes.INTEGER, // yoki INTEGER – raqam bo‘lsa
      allowNull: false,
    },
    totalSalary: {
      type: DataTypes.INTEGER, // yoki DECIMAL
      allowNull: false,
    },
  },
  {
    tableName: "Drainages",
    timestamps: false,
  }
);

export default Drainage;
