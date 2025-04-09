const controller ={
    index:function name (req,res){
        res.render('product');
    },

    add:function name (req,res){
        res.render('product-add');
    }

}

module.exports = controller;