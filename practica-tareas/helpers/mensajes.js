require('colors'); //npm i colors

const mostrarMenu = ()=>{
    return new Promise((resolve) =>{
        console.log('===================');
        console.log('Selecciones una opcion');
        console.log('===================');

        console.log(`${'1.'.green} Crear Lista`);
        console.log(`${'2.'.green} Listar Tareas`);
        console.log(`${'3.'.green} Listar Tareas Completadas`);
        console.log(`${'4.'.green} Listar Tareas Pendientes`);
        console.log(`${'5.'.green} Completar Tarea(s)`);
        console.log(`${'6.'.green} Borrar Tareas`);
        console.log(`${'0.'.green} salir`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccione una opción: ', (opt)=>{
            //console.log(opt);
            readline.close();
            resolve(opt);
        });

    });

}


const pausa = ()=> {
    return new Promise((resolve) =>{
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Presione ENTER para continuar ', (opt)=>{
            //console.log(opt);
            readline.close();
            resolve(opt);
        });

    });
}

/**
 * Ejercicio
 * Mandar a llamar en nuestro archivo APP
 * 
 */

module.exports = {
    mostrarMenu,
    pausa
}