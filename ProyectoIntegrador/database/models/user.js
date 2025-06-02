module.exports = function(sequelize, DataTypes) {
    let alias = "User";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id' 
        },
        email: {
            type: DataTypes.STRING,
            field: 'email'
        },
        password: {
            type: DataTypes.STRING,
            field: 'contrasenia'  
        },
        birthdate: {
            type: DataTypes.DATE,
            field: 'fecha_nacimiento' 
        },
        dni: {
            type: DataTypes.INTEGER,
            field: 'dni'
        },
        profileImage: {
            type: DataTypes.STRING,
            field: 'foto_perfil' 
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'createdAt'
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updatedAt'
        },
        deletedAt: {
            type: DataTypes.DATE,
            field: 'deletedAt'
        }
    };

    let config = {
        tableName: "usuarios",
        timestamps: false
    };

    let User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.hasMany(models.Product, {
            as: "products",
            foreignKey: "id_usuario"  
        });
        User.hasMany(models.Comment, {
            as: "comments",
            foreignKey: "userId"  
        });
    };

    return User;
};
