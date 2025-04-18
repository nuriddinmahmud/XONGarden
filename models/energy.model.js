import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

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
      allowNull: false,
    },

    amountPaid: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },

    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Energies",
    timestamps: false,
  }
);

export default Energy;
