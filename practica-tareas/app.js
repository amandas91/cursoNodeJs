// const {mostrarMenu, pausa} =require ('./helpers/mensajes');
const {inquirerMenu, pausa, leerInput} = require('./helpers/inquire');
const {guradaDB} = require('./helpers/guardarArchivo');
const Tareas = require('./models/Tareas');

const main = async() =>{
    let opt = '';
    const tareas = new Tareas();
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
                const desc = await leerInput();
                
                tareas.crearTarea(desc);
            break;
            case '2':
                //Listar
                console.log(tareas.getListadoArr);
                
            break;
            case '3':
                //tareas.listadoCompleto();
                //Listar compleatdos
                tareas.listarPendientesCompletados(true);
            break;
            case '4':
                //Listar pendientes
                tareas.listarPendientesCompletados(false);
            break;
            case '5':

            break;
            case '6':
            break;
        }

        guradaDB(tareas.getListadoArr);
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