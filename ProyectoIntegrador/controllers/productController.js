let data = require('../db/index')


const controller ={
    index:function  (req,res){
        let iduscado = req.params.id;
        let producto = data.productos;


        res.render('product', {producto: producto});
    },

    add:function (req,res){
        res.render('product-add');
    },
    test:function (req,res){
        return res.send("hola")
    }

}

module.exports = controller;