const fs = require('fs');

const archivo = './db/data.json';

const guradaDB = (data) =>{
    
    fs.writeFileSync(archivo, JSON.stringify(data));
}

const leerDB = () =>{

    if( !fs.existsSync(archivo) ){
        return null;
    }

    const inf = fs.readFileSync(archivo, { encoding: 'utf-8'});
    const data = JSON.parse(inf);


    return data;
}

module.exports = {
    guradaDB,
    leerDB
}