function calcularMediaArtimetica(lista){
//    let sumaLista = 0;

// for (let i=0; i<lista.length; i++){
//     sumaLista += lista[i];
// }

const sumaLista = lista.reduce(// El método reduce suma los elementos del array, algo parecido al for anterior, dentro del método va una función anónima
    function(valorAcumulado = 0, nuevoElemento){//Los que se retorna dentro la función anónima va en valorAcumulado, se le asigna el 0 para la primera iteración
        return valorAcumulado + nuevoElemento;                                                    
    }) 


const promedio = sumaLista/(lista.length);
const sumaR = document.getElementById("SumaR");
sumaR.innerText = "El promedio es: " + promedio;    
}

calcularMediaArtimetica([1,14,151,98]);