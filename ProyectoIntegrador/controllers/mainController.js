let data = require('../database/models')
const controller ={
    index:function  (req,res){
        data.Product.findAll()
        .then(function(productos){
        
        return res.render('index', {productos:productos});
        })
      .catch(function(error){
        return res.send("Error");
      })
    },

    searchResults:function  (req,res){
        res.render('search-results', {productos: data.Product});
    },


    
    
}

module.exports = controller;