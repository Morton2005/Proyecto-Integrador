let data = require('../database/models')
let Op = data.Sequelize.Op;
const controller = {
  index: function (req, res) {
    data.Product.findAll()
      .then(function (productos) {
        return res.render('index', { productos: productos });
      })
      .catch(function (error) {
        return res.send("Error");
      });
  },

  searchResults: function (req, res) {
    let search = req.query.search;

    data.Product.findAll({
      where: {
        nombre_producto: { [Op.like]: %${search}% }
      },
      include: [
        { association: 'usuario' },
        {
          association: 'comentarios',
          include: [{ association: 'usuario' }]
        }
      ]
    })
      .then(function (productos) {
        if (productos.length > 0) {
          return res.render("search-results", {
            productos: productos,
            search: search
          });
        } else {
          return res.render("search-results", {
            productos: [],
            search: search,
          });
        }
      })
      .catch(function (error) {
        return res.send("Error");
      });
  }
};
module.exports = controller;