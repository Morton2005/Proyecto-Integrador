const { where } = require('sequelize');
let data = require('../database/models')
let Op = db.sequelize.Op;
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

    searchResults: function(req, res) {
    let search = req.query.search;
    data.Producto.findAll({
    where: [
	{ title: { [Op.like]: `%${req.body.search}%` } }
    ]
  })
   .then(function(productos) {
      res.render("search-results"), {
        title: "search",  
        data: products,
        search: search

}
}
module.exports = controller;