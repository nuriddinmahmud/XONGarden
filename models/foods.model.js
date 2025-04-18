import { DataTypes } from "sequelize";
import  sequelize  from "../config/database.js";

const Foods = sequelize.define(
  "Foods",
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

    shopName: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "Foods",
    timestamps: false,
  }
);

export default Foods;
