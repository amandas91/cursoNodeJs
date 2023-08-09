/**
 * Promesa
 */

const funcionResolve = () =>{
    return Promise.resolve('Todo salio bien');
}

const funcionReject = () =>{
    return Promise.reject('Todo salio mal');
}

/**
 * Cachar resultado correcto
 */
funcionResolve().then(value =>{
    console.log(value);
});

/**
 * Cachar resultado erroneo
 */
funcionReject().catch(value =>{
    console.log(value);
});

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

const id = 2;

// getEmpleado (id)
//     .then(empleado => {
//         console.log(empleado);
//         getSalario(id)
//             .then(salario => console.log(salario))
//             .catch(err => console.log(err))
//     })
//     .catch(err => console.log(err))
let nombre;
getEmpleado(id)
    .then(empleado => {

            nombre = empleado;
            
            return getSalario(id);
    })
    .then( salario => console.log(`El empleado ${nombre} con el id ${id} tiene un salario de ${salario}`))
    .catch(err => console.log(`Error ${err}`))




// getEmpleado(id)
//     .then(empleado => {console.log(empleado)})
//     .catch(err => console.log(err));

// getSalario(1)
//     .then(salario => { console.log(salario)})
//     .catch(err => console.log(err));

/**
 * Mandar a llamar la funcion getEmpleado y si existe el empleado
 * ejecutar getSalario
 */