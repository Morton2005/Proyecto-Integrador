const controller ={
    index:function name (req,res){
        res.render('index', { title: 'Express' });
    }

}

module.exports = controller;