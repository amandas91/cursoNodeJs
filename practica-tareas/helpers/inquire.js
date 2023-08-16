const inquirer = require('inquirer');
require('colors');


const preguntas = [
    {
        type: 'list',
        name: 'opcion', //Este es el nombre que se asigna para desestructurar
        message: '¿Qué desea hacer?',
        // choices: ['Crear Tarea','Listar','Borrar']
        choices: [
            {
                value: '1',
                name: `${ '1.' } Crear tarea`
            },
            {
                value: '2',
                name: `${ '2.' } Listar tareas`
            },
            {
                value: '3',
                name: `${ '3.' } Listar tareas completadas`
            },
            {
                value: '4',
                name: `${ '4.' } Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${ '5.' } Completar tarea(s)`
            },
            {
                value: '6',
                name: `${ '6.' } Borrar tarea`
            },
            {
                value: '0',
                name: `${ '0.' } Salir`
            },
            
        ]
    }
];

const inquirerMenu = async() => {
    console.clear();
    console.log('==========================');
    console.log(' Seleccione una opción'.white );
    console.log('==========================\n');

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}

const pausa = async() => {
    
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'enter' } para continuar`
        }
    ];

    await inquirer.prompt(question);
}


const leerInput = async() =>{
   
    const pregunta = [
        {
            type:'input',
            name: 'desc',
            message: 'Descripcion',
            validate( value){
                if(value.length === 0){
                    return 'Por favor ingrese un valor'
                }

                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(pregunta);

    return desc;

}


const listadoTareasBorrar = async(tareas = []) =>{

    const choices = tareas.map((tarea , i) =>{
        const idx = `${ i + 1}.`.green;

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    });

    /**
     * 
     */
    choices.unshift({
        value:'0',
        name: '0.'.green + 'Cancelar'
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id', //Este es el nombre que se asigna para desestructurar
            message: 'Borrar',
            // choices: ['Crear Tarea','Listar','Borrar']
            choices
        }
    ];

    const { id } = await inquirer.prompt(preguntas);
    return id;

}


const confirmar = async() =>{
    const question = [
        {
            type:'confirm',
            name:'ok',
            message:'¿Estas seguro?'
        }
    ];

    const { ok } = await inquirer.prompt(question);

    return ok;
}


const mostrarListadoChecklist = async(tareas = []) => {

    const choices = tareas.map((tarea , i) =>{
        const idx = `${ i + 1}.`.green;

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true :false
        }
    });

    const preguntas = [
        {
            type: 'checkbox',
            name: 'ids', //Este es el nombre que se asigna para desestructurar
            message: 'Selecciona',
            // choices: ['Crear Tarea','Listar','Borrar']
            choices
        }
    ];

    const { ids } = await inquirer.prompt(preguntas);
    return ids;

}


module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
}