const roles = [
    {
        id:1,
        rol:'admin'
    },
    {
        id:2,
        rol:'user'
    },
    {
        id:3,
        rol:'super user'
    }
]


const getRol = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const rol = roles.find(rol => rol.id === id);
            if (rol) {
                resolve(rol);
            } else {
                reject(`No existe el rol con ID: ${id}`);
            }
        },5000);
        
    });
};



// getRol(id)
//     .then(rol => {
//         console.log(rol);
//     })
//     .catch(err => {
//         console.log(err);
//     }
// );

const getInfoRol = async(id) =>{
    try{
        const is_rol = await getRol(id);
        console.log("GET INFO");
        return is_rol;
    }catch(err){
        throw err;
    }
}

const id =3;

getInfoRol(id)
.then(rol =>{
    console.log(rol);
})
.catch(err => {
    console.log(err);
});




// Crear una funcion getRol async 
// regrese el rol
// Mandar a llamar getRol()