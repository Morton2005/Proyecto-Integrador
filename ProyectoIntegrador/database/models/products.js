module.exports = function(sequelize, dataTypes) {
    let alias = "Product";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        nombre_producto: {          
            type: dataTypes.TEXT,   
            allowNull: false,
            field: 'nombre_producto' 
        },
        descripcion_Producto: {     
            type: dataTypes.TEXT,
            allowNull: true,
            field: 'descripcion_Producto'
        },
        foto_Producto: {            
            type: dataTypes.STRING,
            allowNull: true,
            field: 'foto_Producto'
        },
        id_usuario: {              
            type: dataTypes.INTEGER,
            allowNull: false,
            field: 'id_usuario'
        },
        createAt: {
            type: dataTypes.DATE,
            field: 'createAt'
        },
        updateAt: {
            type: dataTypes.DATE,
            field: 'updateAt'
        },
        deleteAt: {
            type: dataTypes.DATE,
            allowNull: true,
            field: 'deleteAt'
        }
    };

    let config = {
        tableName: "productos",
        timestamps: true,           
        createdAt: 'createAt',    
        updatedAt: 'updateAt',    
        deletedAt: 'deleteAt',   
        paranoid: true           
    };
    

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.User, {
            as: "user",
            foreignKey: "id_usuario"
        });
        Product.hasMany(models.Comment, {
            as: "comments",
            foreignKey: "productId"
        });
    };

    return Product;
}
