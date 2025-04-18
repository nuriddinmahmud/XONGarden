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
      validate: {
        isDate: true,
      },
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
      type: DataTypes.NUMBER,
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
