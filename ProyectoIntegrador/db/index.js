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
            nombre:'Audemars-piguet',
            descripcion:'Reloj de calidad, color gris, buen estado',
            id:1,
            comentarios:[
                {
                    nombreDeUsuario:'Fernanditotorres96',
                    fotoDePerfil:'../public/images/users/default-image.png',
                    texto:'Muy bueno!',
                }
                
            ],
        },
        {
            imagen:'/images/products/relo2.jpeg',
            nombre:'Biden',
            descripcion:'Reloj de calidad, color azul y dorado, nuevo sin uso',
            id:2,
            comentarios:[
                {
                    nombreDeUsuario:'juanAlberto14',
                    fotoDePerfil:'../public/images/users/default-image.png',
                    texto:'Impecable!',
                }
                
            ],
        }
    ]

}
module.exports = data