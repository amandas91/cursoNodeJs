// setTimeout(()=>{
//     console.log('Este es un callback');
// },3000);

/**
 * Funcion de Orden Superior
 * Callback: Funcion que se ejecuta dentro de otra funcion
 */

const getUserId = (id, callback) => {
    console.log(`El id es ${id}`);
    const user = {
        id: 1,
        nombre: 'Amanda'
    }

    setTimeout(()=>{
        callback(user);
    },3000);

}

// getUserId(12, (user)=>{
//     console.log(`El usuario ${user.nombre}`);
// });

/**
 * Crear una funcion de orden superior obtenerTitulo
 * recibir como parametros titulo y callback
 * dentro de la funcion de OS
 * Crear una variable llamada text e inicializarla con untring
 * "Bienvenido a"
 * que concatene el titulo que recibe.
 * El callback debra ejecutar en 5 segundos
 * crear un funcion crearTitulo que imprima la variable text.
 */

// const obtenerTitulo = (titulo , callback)=>{
//     let text = `Bienvenido a ${titulo}`;
//     setTimeout( () =>{
//         callback(text);
//     }, 5000);
// }
// const crearTitulo = (text) =>{
//     console.log(text);
// };

// const crearTitulo2 = (text, callback) =>{
//     console.log(text);
// };

// obtenerTitulo('Home', crearTitulo2);

let rol;

 const getPerfil = (id, callback)=>{
    setTimeout(()=>{
        rol = 'Admin';
        callback(rol);
    },2000);
 }


 getPerfil(23, ()=>{
    console.log(`El rol es ${rol}`);
 });








