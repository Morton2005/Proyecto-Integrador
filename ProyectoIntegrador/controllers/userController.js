let data = require('../database/models') 
let bcrypt = require('bcryptjs');

const controller ={

    register:function name (req,res){
        if(req.session.user){
            res.redirect('/users/profile'); 
        }
        return res.render('register')
    },
    

    create: function(req, res){
        if(req.body.email == ""){
            return res.send("El email no puede estar vacío");
        }

        if(req.body.password.length < 3){
            return res.send("La contraseña debe tener al menos 3 caracteres");
        }

        db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(function(userFound){
            if(userFound){
                return res.send("El email ya existe")
            }
            return db.User.create({
                username: req.body.username,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                birthdate: req.body.birthdate,
                dni: req.body.dni,
                profileImage: req.body.profileImage,
                createdAt: new Date() 
        })
        })
        .then(function(){
            return res.redirect('/')
        })
        .catch(function(error) {
            return res.send("Error al crear el usuario: " + error);
        })
    },

    show: function(req, res) {
        return res.render('register');    
    },
    

    profile:function name (req,res){
            res.render('profile');
    },

    login:function name (req,res){
        if(req.session.user){
            return res.redirect('/users/profile')
        }
        res.render('login');
    },

    
    loginProcess: function(req, res) {
        data.User.findOne({
            where: { email: req.body.email }
        })
        .then(function(usuario) {
            if(!usuario){
                return res.send("El email no está registrado.");
            }

            let contraseñaCorrecta = bcrypt.compareSync(req.body.password, usuario.password);

            if(!contraseñaCorrecta){
                return res.send("La contraseña es incorrecta.");
            }

            req.session.user = usuario;
            return res.redirect('/users/profile');
           
        })
        .catch(function(error) {
            return res.send("Error al procesar el login");
        });
    },
    
}


module.exports = controller;