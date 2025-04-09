const controller ={
    profile:function name (req,res){
        res.render('profile');
    },
    login:function name (req,res){
        res.render('login');
    },

    register:function name (req,res){
        res.render('register');
    },

}

module.exports = controller;