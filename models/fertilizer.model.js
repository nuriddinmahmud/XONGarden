import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Fertilizer = sequelize.define(
  "Fertilizer",
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

    type: {
      type: DataTypes.ENUM("mineral", "local"),
      allowNull: false,
    },

    machineCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    tonAmount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "fertilizers",
    timestamps: false,
  }
);

export default Fertilizer;
