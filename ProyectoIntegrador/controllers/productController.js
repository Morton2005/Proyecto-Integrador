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
        res.render("product-add");
    },





    

}

module.exports = controller;