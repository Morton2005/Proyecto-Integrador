const db = require('../database/models');

const controller = {
    home: function(req,res){
        db.Product.findAll({
            include: [{ model: db.User, as: 'user' }]
        })
        .then(function(products){
            res.render("index", { productos: products });
        })
        .catch(function(error){
            res.send(error);
        });
    },

    detalle: function (req, res) {
        let idBuscado = req.params.id;

        db.Product.findByPk(idBuscado, {
            include: [{ model: db.User, as: "user" }]
        })
        .then(function (producto) {
            if (!producto) return res.send("Producto no encontrado");

            res.render("product", {
                productoDetalle: producto
            });
        })
        .catch(function (error) {
            res.send("Error al buscar el producto: " + error);
        });
    },

    add: function(req,res){
        if(!req.session.user){
            return res.redirect('/users/login');
        }

        res.render("product-add");
    },

    create: function(req, res) {
        db.Product.create({
            nombre_producto: req.body.nombre_producto,
            descripcion_Producto: req.body.descripcion_Producto,
            foto_Producto: req.body.foto_Producto,
            id_usuario: req.session.user.id,
            createdAt: new Date()
        })
        .then(function() {
            return res.redirect('/');
        })
        .catch(function(error) {
            return res.send("Error al crear el producto: " + error);
        });
    },

    profile: function (req, res) {
        if (!req.session.user) {
            return res.redirect('/users/login');
        }

        db.User.findByPk(req.session.user.id, {
            include: [{ association: "productos" }]
        })
        .then(user => {
            if (!user) return res.redirect('/users/login');

            res.render('profile', {
                user: user,
                productos: user.productos,
                totalProductos: user.productos.length
            });
        })
        .catch(error => {
            res.send("Error al cargar el perfil: " + error);
        });
    }
};

module.exports = controller;
