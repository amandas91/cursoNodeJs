const Tarea = require('./Tarea');
class Tareas {

    _listado = {}

    constructor(){
        this._listado = {}
    }

    get getListadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })

        return listado;
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
        console.log(tarea);
    }

    listadoCompleto(){

        this.getListadoArr.forEach( (tarea, i) =>{
            const idx = `${ i + 1 }`.red;
            const {desc, completadoEn} = tarea;

            const estado = (completadoEn)
                ? 'Completada'.green
                : 'Pendientes'.red

                console.log(`${ idx }  ${desc} => ${estado}`);

        });
    }

    listarPendientesCompletados(completadas = true){
        this.getListadoArr.forEach( tarea =>{
            // const idx = `${ i + 1 }`.red;
            let contador = 0;
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn)
                ? 'Completada'.green
                : 'Pendientes'.red
            //Completadas
            if(completadas ){
                if(completadoEn){
                    contador += 1;
                    console.log(`${(contador + '.').green} ${desc} -> ${estado}`);
                }
                
            }else{
                if(!completadoEn){
                    contador += 1;
                    console.log(`${(contador + '.').red} ${desc} -> ${estado}`);
                }
                
            }

        });
    }

    /**
     * Reciba un parametro (True / false) y solo muetra o las completadas o las que no
     */

    cargarTareasFromArray( tareas = []){

        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });

    }

    borrarTarea(id){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    toggleCompletadas (ids = []){

        ids.forEach( id =>{
            const tarea = this._listado[id];

            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toString();
            }
        });

        this.getListadoArr.forEach( tarea => {
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null;
            }
        });

    }

}

module.exports = Tareas;