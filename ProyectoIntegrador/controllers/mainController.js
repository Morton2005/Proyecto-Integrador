let data = require('../db/index')
const controller ={
    index:function  (req,res){
        res.render('index', {productos: data.productos});
    },

    searchResults:function  (req,res){
        res.render('search-results');
    }
    
}

module.exports = controller;