let estudiantesSemestre=(estudiantes,semestre)=>{
    let nombres = [];
    for( let i=0;i<estudiantes.length;i++){
        if(estudiantes[i].semestre===semestre){
            nombres.push(estudiantes[i].nombre)
        }
        }
        return nombres
    }
    

let estudiantes =[
    {nombre:"Luis",semestre:5,nota:14},
    {nombre:"Daniela",semestre:1,nota:19},
    {nombre:"Juan",semestre:3,nota:10},
    {nombre:"Ricardo",semestre:5,nota:7},
    {nombre:"Moises",semestre:4,nota:10}
];

let salida=document.getElementById("salida")

salida.innerHTML=`
Estudiantes de 1to semestre: ${estudiantesSemestre(estudiantes,1)}
<br>Estudiantes de 3er semestre: ${estudiantesSemestre(estudiantes,3)}
<br>Estudiantes de 4er semestre: ${estudiantesSemestre(estudiantes,4)}
<br>Estudiantes de 5er semestre: ${estudiantesSemestre(estudiantes,5)}`
