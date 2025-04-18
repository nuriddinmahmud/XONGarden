import { DataTypes } from "sequelize";
import  sequelize  from "../config/database.js";

const Oil = sequelize.define(
  "Oil",
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

    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Oils",
    timestamps: false,
  }
);

export default Oil;
