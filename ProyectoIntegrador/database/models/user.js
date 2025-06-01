module.exports = function(sequelize,dataTypes){
    let alias = "User";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        username:{
            type: dataTypes.STRING,
        },
        email:{
            type: dataTypes.STRING,
        },
        password:{
            type: dataTypes.STRING,
        },
        birthdate:{
            type: dataTypes.DATE,
        },
        dni:{
            type: dataTypes.INTEGER,
        },
        profileImage:{
            type: dataTypes.STRING,
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
        tableName: "usuarios",
        timestamps: false
    };

    let User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        User.hasMany(models.Product,{
            as: "products",
            foreignKey: "userId"
        });
        User.hasMany(models.Comment,{
            as: "comments",
            foreignKey: "userId"
        });
    };
    return User;

}