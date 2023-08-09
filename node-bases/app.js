const fs = require('node:fs');
const {crearTablaPromess} = require('./multiplicar');
const argv = require('./config/yargs');


//crearTabla(2);
/**
 * Process.argv
 * Leer argumentos que pasamos en la terminal
 */


crearTablaPromess(argv.b, argv.l, argv.h)
    .then(base =>{
        console.log('Se ejecuto correctamente',base);
    })
    .catch(err =>{
        console.log('Hubo un error' ,err);
    })




















