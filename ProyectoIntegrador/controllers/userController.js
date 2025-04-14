let data = require('../db/index')

const controller ={
    profile:function name (req,res){
            res.render('profile', {productos: data.productos,usuario:data.usuario});
    },
    login:function name (req,res){
        res.render('login');
    },

    register:function name (req,res){
        res.render('register');
    },

}


module.exports = controller;