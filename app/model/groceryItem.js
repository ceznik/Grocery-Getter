var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var GroceryItem = sequelize.define("groceryItem",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    department:{
        type:Sequelize.STRING
    },
    UPC_Details:{
        type: Sequelize.JSON
    },
    quantity:{
        type:Sequelize.INTEGER,
        default: 1
    },
    status: {
        type: Sequelize.STRING
    }
});

GroceryItem.sync();

module.exports = GroceryItem;