/**
 * Desesstructuracion basica
 */
const empresa = {
    nombre: 'Pepsi',
    direccion: 'Calle x ',
    rl: 'Venta de refrecos'
}

//const name = empresa.nombre;
//const direccion = empresa.direccion;
//const rol = empresa.rol;

/**
 * Que hacer para hacerlo más facil..
 */

const {nombre, direccion , rl} = empresa;
console.log(nombre);

const imprimeEmresa = ({nombre,rol}) =>{
    console.log({nombre, rol});
}

//imprimeEmresa(empresa);

/**
 * En Arreglos
 */

const carros = ['mazda', 'bmw', 'porche'];

const  [,,e3] = carros;

console.log(e3);

//console.log(e1);

/**
 * perfil
 * nombre, apellido, correo, salario
 * desestructurar con una funcion de flecha
 * imprimir unicamente nombre y salario
 */

const perfil = {
    nombre:'Amanda',
    apellido: 'Sabino',
    correo:'amanda',
    salario: 20
}

const imprimePerfil = ({nombre, salario}) =>{
    console.log(nombre,salario);
}

imprimePerfil(perfil);