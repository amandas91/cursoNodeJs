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
*IF = ?
*ELSE = :
*/

const getEmpleado = (id, callback)=>{
    const empleado = empleados.find(e => e.id === id)?.nombre;
    
    if(empleado){
        callback(null, empleado);
    }else{
        callback(`El empleado con el id ${id} no existe`);
    }
}

// getEmpleado(5, (err, empleado)=>{
//     if(err){
//         return console.log(err);
//     }

//     console.log(empleado);
// });

const getSalario = (id, callback) =>{
    const salario = salarios.find( ee => ee.id === id)?.salario;

    if(salario){
        callback(null, salario);
    }else{
        callback(`El salario con el id ${id} no existe`);
    }
}

// getSalario(2, (err, salario)=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log(salario);
// })

let id = 3;

getEmpleado(id, (err, empleado)=>{
    if(err){
        return console.log(err);
    }

    getSalario (id, (err, salario)=>{
        if(err){
            return console.log(err);
        }
        console.log(`El empleado: ${empleado} tiene un salario de ${salario}`);
    })

})

