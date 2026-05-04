const { cyan } = require("colors");

require("colors");
const alumno={
    Nombre :"Bizcocho",
    Edad:3,
    inscriptoAmaterias :[
        "Base de datos","Logica Computacional","Tecnicas de programacion"
        //Version de error
        //"Base de datos","Tecnicas de programacion"
    ],
    debeCorrelativa : Boolean
}
let materia="POO";

const incripcion=(alumno, materia)=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            if(alumno.debeCorrelativa===false){
                alumno.inscriptoAmaterias.push(materia);
                console.log(`Se a incripto el alumno de manera exitosa` .green);
                console.log(`Actualizada: Se a incripto en las materias ${alumno.inscriptoAmaterias}` .green);
                resolve();
            }    
        },5000)
    })
}

const validarCorrelativa=(alumno,materia)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let necesarias=0;
            for(let i =0; i<alumno.inscriptoAmaterias.length; i++){
                if ("Base de datos"===alumno.inscriptoAmaterias[i]||
                    "Logica Computacional"===alumno.inscriptoAmaterias[i]||
                    "Tecnicas de programacion"===alumno.inscriptoAmaterias[i])
                    {
                    necesarias++;
                }
            }
            if(necesarias===3){
                alumno.debeCorrelativa= false;
                console.log("Promesa cumplida" .bgGreen);
                resolve();
            }
            else{
                alumno.debeCorrelativa=true;
                console.log("Promesa rechazada" .bgRed);
                reject(`No se puede incribir a ${materia} por que debe debe materias` .red)
            }
        },2000)
    })
}
validarCorrelativa(alumno,materia).then((response)=>{
    console.log(`El alumno ${alumno.Nombre} de edad ${alumno.Edad}`.cyan);
    console.log(`Se a incripto en las materias ${alumno.inscriptoAmaterias}`.cyan);
    console.log(`Y`.cyan);
    return incripcion(alumno,materia);
}).catch((error)=>{
    console.log(`El alumno ${alumno.Nombre} de edad ${alumno.Edad}`.cyan);
    console.log(`Se a incripto en las materias ${alumno.inscriptoAmaterias}`.cyan);
    console.log(`Y`.cyan);
    console.error(error);
}).finally((end)=>{
    console.log("Fin".cyan)
})
