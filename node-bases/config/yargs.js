const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption:true,
        describe: 'Es la base inicial de la tabla de multiplicacion'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        demandOption:true,
        describe: 'Pinta la lista de la multiplicacion'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Es el limite de la multiplicacion'
    })
    .check((argv,option) =>{
        if(isNaN(argv.b)){
            throw 'La base debe de ser un número'
        }

        return true;
    })
    .argv


/**
 * Crear un parametro 
 * l = boolean (Si es true, que pinte la lita)
 * h = limite de numeros a multiplicar
 * Ambos con su descripcion
 */

module.exports = argv;