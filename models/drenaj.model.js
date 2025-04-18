import { sequelize } from "../config/database.js";

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
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        min: 0.01,
      },
    },

    totalSalary: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        min: 0.01,
      },
    },
  },

  {
    tableName: "Drainages",
    timestamps: false,
  }
);

export default Drainage;