import { DataBaseQuery } from "../DB/DB.js";
import { DataTypes } from "sequelize";

const User = DataBaseQuery.define("user", { // Это сам наш юзер
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nikname: { type: DataTypes.STRING, unique: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" }
})

const Portfolio = DataBaseQuery.define("card", { // Это само портфолио и она у пользователя едина
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: "id" } }
})

const PortfolioGame = DataBaseQuery.define("card-item", { // Это элементы портфолио
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    portfolioId: { type: DataTypes.INTEGER, allowNull: false, references: { model: Portfolio, key: "id" } },
    gameTitle: { type: DataTypes.STRING, allowNull: false },
    gameImage: { type: DataTypes.STRING, allowNull: false },
    gameDescr: { type: DataTypes.TEXT, allowNull: true } 
})


User.hasOne(Portfolio, {
    foreignKey: "userId",
    onDelete: "CASCADE"
})

Portfolio.hasMany(PortfolioGame, {
    foreignKey: "portfolioId",
    as: "games"
});

PortfolioGame.belongsTo(Portfolio, {
    foreignKey: "portfolioId"
})



export {
    User, Portfolio, PortfolioGame
}