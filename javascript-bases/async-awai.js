const empleados = [
    {
        id:1,
        nombre:'Amanda'
    },
    {
        id:2,
        nombre:'Abraham'
    },
    {
        id:3,
        nombre:'Laura'
    },
    
];

const salarios = [
    {
        id:1,
        salario:400
    },
    {
        id:2,
        salario:100
    }
    
];

/**
 * async
 * await
 */

const getEmpleado = (id) =>{
    return new Promise ((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;
        (empleado)
        ? resolve (empleado)
        : reject (`No existe el empledo con id ${id}`);
    });
}

const getSalario = (id) =>{
    return new Promise( ( resolve, reject) =>{
        const salario = salarios.find(s => s.id === id)?.salario;

        (salario)
        ? resolve(salario)
        : reject (`No existe el salario con id ${id}`);
    });
}

/**
 * Funcion Async
 */
const getInfoEmpleado = async(id) =>{
    try{
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado ${empleado} es de ${salario}`;
    }catch(err){
        throw err;
    }
}

const id = 5;
getInfoEmpleado(id)
    .then(msg => {
        console.log(msg);
    })
    .catch(err =>{
        console.log(err);
    });



