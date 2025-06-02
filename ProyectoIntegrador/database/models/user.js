module.exports = function(sequelize, DataTypes) {
    let alias = "User";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'  // igual, pero explícito
        },
        email: {
            type: DataTypes.STRING,
            field: 'email'
        },
        password: {
            type: DataTypes.STRING,
            field: 'contrasenia'  // se llama "contrasenia" en BD
        },
        birthdate: {
            type: DataTypes.DATE,
            field: 'fecha_nacimiento' // nombre real en BD
        },
        dni: {
            type: DataTypes.INTEGER,
            field: 'dni'
        },
        profileImage: {
            type: DataTypes.STRING,
            field: 'foto_perfil'  // nombre real en BD
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'createAt'
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updateAt'
        },
        deletedAt: {
            type: DataTypes.DATE,
            field: 'deleteAt'
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
            foreignKey: "id_usuario"  // nombre real en productos
        });
        User.hasMany(models.Comment, {
            as: "comments",
            foreignKey: "userId"  // aquí revisa si en comentarios la FK es userId o algún otro nombre
        });
    };

    return User;
};
