module.exports = function(sequelize, dataTypes) {
    let alias = "Comment";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: dataTypes.STRING,
            field: 'texto'  // ⬅️ nombre real en la BD
        },
        productId: {
            type: dataTypes.INTEGER,
            field: 'id_productos'  // ⬅️ nombre real en la BD
        },
        userId: {
            type: dataTypes.INTEGER,
            field: 'id_usuarios'  // ⬅️ nombre real en la BD
        },
        createdAt: {
            type: dataTypes.DATE,
            field: 'createdAt'
        },
        updatedAt: {
            type: dataTypes.DATE,
            field: 'updatedAt'
        },
        deletedAt: {
            type: dataTypes.DATE,
            field: 'deletedAt'
        }
    };

    let config = {
        tableName: "comentarios",
        timestamps: false
    };

    let Comment = sequelize.define(alias, cols, config);

    Comment.associate = function(models) {
        Comment.belongsTo(models.Product, {
            as: "product",
            foreignKey: "id_productos"
        });
        Comment.belongsTo(models.User, {
            as: "user",
            foreignKey: "id_usuarios"
        });
    };

    return Comment;
};
