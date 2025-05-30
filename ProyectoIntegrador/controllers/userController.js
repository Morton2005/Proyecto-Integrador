let data = require('../db/index') //este esta mal creo xq hay que usar la nueva base de datos esa se queda vieja. "let data = require('../db/index')"
//[const op = db.Sequelize.Op;] eso Cuando queremos filtrar por criterios que no sean igualdad necesitamos utilizar los operadores de sequelize
//creo que no anda xq falta linkear la base de datos bien

const controller ={

    show: function(req, res) {
        return res.render('register');    
    },
    create: function(req, res){
        db.User.create({
             email: req.body.email,
             password: bcrypt.hashSync(req.body.password, 10) // usamos 10 de nivel de encriptado en las slides recomienda entra 10 y 12
        })   
        .then(function(User){
             return res.redirect('/');
        }) 
         .catch(function (error){
               return res.send(error);
        });
    },

    profile:function name (req,res){
            res.render('profile', {productos: data.productos,usuario:data.usuario});
    },
    login:function name (req,res){
        res.render('login');
    },

    register:function name (req,res){
        res.render('register');
    },
    ProcesoDeLoggin: function(req, res) {
        data.User.findOne({
            where: { email: req.body.email }
        })
        .then(function(userFound) {
           
            res.send(userFound);
        })
        .catch(function(error) {
            res.send(error);
        });
    },
    
}


module.exports = controller;