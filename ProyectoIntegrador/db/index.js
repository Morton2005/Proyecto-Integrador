const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("milo", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate()
    .then(() => console.log(" Conectado correctamente a MySQL"))
    .catch(err => console.error(" Error al conectar a MySQL:", err));

const Product = sequelize.define("Product", {
    nombre: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    descripcion: DataTypes.STRING
}, {
    tableName: "productos",
    timestamps: false
});

module.exports = { sequelize, Product };
