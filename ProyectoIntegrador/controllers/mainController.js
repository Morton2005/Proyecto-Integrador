const { where } = require('sequelize');
let data = require('../database/models')
let Op = data.sequelize.Op;
const controller ={
    index:function  (req,res){
        data.Product.findAll()
        .then(function(productos){
        
        return res.render('index', {Product:productos});
        })
      .catch(function(error){
        return res.send("Error");
      })
    },

    searchResults: function(req, res) {

    data.Product.findAll({
      
    where: [
	{ title: { [Op.like]: `%${req.body.search}%` } }
    ]
    include: [ 
      {association:""} 
      {association:""}//los comentarios y el usuario hay q agreagarrle en estos dos 
    ]

  })
  
   .then(function(productos) {
      return res.render("search-results"),{
        Product: productos,
        search: search}
   })
  
    .catch(function(error){
        return res.send("Error");
      })
    }
  }
module.exports = controller;