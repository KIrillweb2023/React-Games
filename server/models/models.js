import { DataBaseQuery } from "../DB/DB.js";
import { DataTypes } from "sequelize";

const User = DataBaseQuery.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nikname: { type: DataTypes.STRING, unique: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" }
})

export {
    User
}