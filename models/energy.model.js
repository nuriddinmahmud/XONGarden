import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Energy = sequelize.define(
  "Energy",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    amountPaid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 24000,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "very nice",
    },
  },
  {
    tableName: "Energies",
    timestamps: false,
  }
);

export default Energy;
