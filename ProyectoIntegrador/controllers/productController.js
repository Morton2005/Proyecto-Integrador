let data = require('../db/index')


const controller ={
    index:function  (req,res){
        let idbuscado = req.params.id;
    let productos = data.productos;

    let producto = productos[idbuscado - 1];

        res.render('product', {
            productoDetalle: producto,
            productos: productos
          });
    },

    add:function (req,res){
        res.render('product-add');
    },
    test:function (req,res){
        return res.send("hola")
    }

}

module.exports = controller;