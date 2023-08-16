// const {mostrarMenu, pausa} =require ('./helpers/mensajes');
const {inquirerMenu, pausa, leerInput, 
    listadoTareasBorrar, 
    confirmar, 
    mostrarListadoChecklist
} = require('./helpers/inquire');
const {guradaDB, leerDB} = require('./helpers/guardarArchivo');
const Tareas = require('./models/Tareas');

const main = async() =>{
    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if(tareasDB){
        //console.log(tareasDB);
        tareas.cargarTareasFromArray(tareasDB);
    }

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
                // completado  * Pendiente
                const ids = await mostrarListadoChecklist(tareas.getListadoArr);
                console.log(ids);

                tareas.toggleCompletadas(ids);
            break;
            case '6':
                //Borrar
                const id = await listadoTareasBorrar(tareas.getListadoArr);

                if( id !== 0){
                    const ok = await confirmar();

                    if(ok){
                        tareas.borrarTarea(id);
                        console.log('Tarea Borrada');
                    }
                }

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