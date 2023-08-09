// const {mostrarMenu, pausa} =require ('./helpers/mensajes');
const {inquirerMenu, pausa} = require('./helpers/inquire');
const Tarea = require('./models/Tarea');
const main = async() =>{
    let opt = '';
   
    do{
        // console.clear();
        // opt = await mostrarMenu();
        // console.log(opt);
        // await pausa();
        opt = await inquirerMenu();
        //console.log(opt);

        switch(opt){
            case '1':
                //Crear Lista
                const tarea = new Tarea('Crear un repo');
                console.log(tarea);
            break;
            case '2':
            break;
            case '3':
            break;
            case '4':
            break;
            case '5':
            break;
            case '6':
            break;
        }

        await pausa();

    }while(opt !== '0')

}

main();

/**
 * Crear clase llamada Tarea
 * id = '',
 * desc
 * completadoEn = null
 * Constructor()
 * Instalar uuid //DRIVE
 * 
 * Crear clase llamada Tareas
 * #listado
 * _listado {}
 */