const data = {
    usuario:{
        email:'cukin@gmail.com',
        nombreDeUsuario:'MortonDJ',
        contrasenia:'morton05',
        fechaDeNacimiento: '23/10/2005',
        dni:48011547,
        fotoDePerfil:'../public/images/users/default-image.png',
        
    },

    productos:[
        {
            imagen:'/images/products/reloj1.webp',
            nombre:'',
            descripcion:'',
            id:1,
            comentarios:[
                {
                    nombreDeUsuario:'Fernanditotorres96',
                    fotoDePerfil:'../public/images/users/default-image.png',
                    texto:'Muy bueno!',
                }
                
            ],
        }
    ]

}
module.exports = data