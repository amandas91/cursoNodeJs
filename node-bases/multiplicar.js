const fs = require('node:fs');
 
/**
 * Pintar la tabla de multiplicar 5 x 1 = 1
 * 5 x 1 = 1
 * 5 x 2 = 10
 * 5 x 3 = 15
 */

/**
 * Crear una funcion de flecha
 * recibiba un parametro llamado 'base'
 * Imprimir la tabla correspondiente y crear los archivos.
 */


const crearTabla = (base) => {

    console.log("===========");
    console.log(`Tabla de multiplicar ${base}`);
    console.log("===========");

    let tabla='';

    for (let i=1; i<= 10; i++){
        tabla += `${base} x ${i} = ${base * i}
    `;
        
    }
    //console.log(tabla);
    fs.writeFileSync(`tabla-del-${base}.txt`, tabla);
}


const crearTablaAsync = async(base) =>{
    try{
        console.log("===========");
        console.log(`Tabla de multiplicar ${base}`);
        console.log("===========");

        let tabla='';

        for (let i=1; i<= 10; i++){
            tabla += `${base} x ${i} = ${base * i}
        `;
            
        }
        //console.log(tabla);
        fs.writeFileSync(`tabla-del-${base}.txt`, tabla);

        return tabla;
    }catch(err){
        console.log('Error');
        throw(err);
    }
  
}

const crearTablaPromess = (base, listar, hasta) =>{

    return new Promise((resolve, reject) =>{
        console.log("===========");
        console.log(`Tabla de multiplicar ${base}`);
        console.log("===========");

        let tabla='';

        for (let i=1; i<= hasta; i++){
            tabla += `${base} x ${i} = ${base * i}
        `;
            
        }

        (tabla)
            ? resolve(base)
            : reject ('error en la tabla')

        if(listar){
            console.log(tabla);
        }
            
        fs.writeFileSync(`tabla-del-${base}.txt`, tabla);

    });
    
}

function imprimirLog(){
    console.log('Este es una prueba con funcion onrmal');
}

module.exports = {
    //Alias = crear1 : crearTabla
    crearTabla,
    crearTablaAsync,
    crearTablaPromess,
    imprimirLog
    
}