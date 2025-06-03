module.exports = function(sequelize, DataTypes) {
    const alias = "User";

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING
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
            type: DataTypes.INTEGER
        },
        profileImage: {
            type: DataTypes.STRING,
            field: 'foto_perfil'
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        },
        deletedAt: {
            type: DataTypes.DATE
        }
    };

    const config = {
        tableName: "usuarios",
        timestamps: true,
        paranoid: true
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.hasMany(models.Product, {
            as: "productos",  
            foreignKey: "id_usuario"
        });
        User.hasMany(models.Comment, {
            as: "comments",
            foreignKey: "id_usuarios"
        });
    };

    return User;
};
