let data = require('../database/models') 
let bcrypt = require('bcryptjs');

const controller ={

    show: function(req, res) {
        return res.render('register');    
    },
    create: function(req, res){
        db.User.create({
             email: req.body.email,
             password: bcrypt.hashSync(req.body.password, 10) 
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