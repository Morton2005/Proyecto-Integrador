const controller ={
    index:function  (req,res){
        let producto = data.productos[0]
        res.render('product', {producto: producto});
    },

    add:function (req,res){
        res.render('product-add');
    }

}

module.exports = controller;