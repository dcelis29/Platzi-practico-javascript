//Funciones helpers o utils
function esPar(number){
    return (number % 2 === 0); //sobra la decisión ya que por defecto va a retornar true o false en la comparación
}

//Calculadora de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);
    let mediana;
    if (esPar(lista.length)){
        mediana = (lista[mitad] + lista[mitad-1]) / 2;
    }else{
        mediana = lista[mitad];
    }
    return mediana;
}

//Mediana general
const salariosCol = colombia.map(function (personas){
    return personas.salary;
});

const salariosColSorted = salariosCol.sort(function(salaryA, salaryB){
    return salaryA - salaryB;
});

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del top 10%
spliceStart = (salariosColSorted.length * 90) / 100;
spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount); //Splice se utiliza para cortar el array, @param 1: Donde recibe el corte (la posición después del valor que se ponga), @param2: cuantos elementos corta 

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({medianaGeneralCol, medianaTop10Col});

//Hacer tarea del video 22