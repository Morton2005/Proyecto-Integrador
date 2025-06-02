let data = require('../database/models')
const controller ={
    index:function  (req,res){
        data.Product.findAll{}
        .then()
        res.render('index', {productos: data.Product});
    },

    searchResults:function  (req,res){
        res.render('search-results', {productos: data.Product});
    },


    
    
}

module.exports = controller;