module.exports = function(sequelize,dataTypes){
    let alias = "Comment";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        content:{
            type: dataTypes.STRING,
        },
        productId:{
            type: dataTypes.INTEGER,
        },
        userId:{
            type: dataTypes.INTEGER,
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        }
    };

    let config = {
        tableName: "comentarios",
        timestamps: false
    };

    let Comment = sequelize.define(alias, cols, config);

    Comment.associate = function(models){
        Comment.belongsTo(models.Product,{
            as: "product",
            foreignKey: "productId"
        });
        Comment.belongsTo(models.User,{
            as: "user",
            foreignKey: "userId"
        });
    };
    return Comment;

}