const db = require('../database/models')


const controller ={
    home: function(req,res){
        db.Product.findAll({
            include: [{association: "user"}]
        })

        .then(function(products){
            res.render("index", { productos: products });
        })

        .catch(function(error){
            res.send(error);
        });
    },

    index: function (req, res) {
        let idBuscado = req.params.id;

        db.Product.findByPk(idBuscado, {
            include: [{ association: "user" }]
        })
        .then(function (producto) {
            if (!producto) return res.send("Producto no encontrado");

            res.render("product", {
                productoDetalle: producto
            });
        })
        .catch(function (error) {
            res.send(error);
        });
    
    },

    add: function(req,res){
        if(!req.session.user){
            return res.redirect('/users/login');
        }


        res.render("product-add");
    },

    create: function(req,res){
        db.Product.create({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            userId: req.session.user.id,
            createdAt: new Date()
        })

        .then(function(){
            return res.redirect('/')
        })

        .catch(function(error){
            return res.send("Error al crear el producto")
        })
    
    
    }





    

}

module.exports = controller;