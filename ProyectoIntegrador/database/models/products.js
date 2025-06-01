module.exports = function(sequelize,dataTypes){
    let alias = "Product";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name:{
            type: dataTypes.STRING,
        },
        description:{
            type: dataTypes.STRING,
        },
        image:{
            type: dataTypes.STRING,
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
        tableName: "productos",
        timestamps: false
    };

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belongsTo(models.User,{
            as: "user",
            foreignKey: "userId"
        });
        Product.hasMany(models.Comment,{
            as: "comments",
            foreignKey: "productId"
        });
    };
    return Product;

}