const listaCount = {};

function calcularModa(lista){
    
lista.map(
    function(elemento){
        if (listaCount[elemento]){
            listaCount[elemento] += 1
        } else {
            listaCount[elemento] = 1;
        }        
    }
);

const listaArray = Object.entries(listaCount).sort(function(elementoA, elementoB){
    return elementoA[1] - elementoB[1];
});

const moda = listaArray[listaArray.length-1];

const modaR = document.getElementById("ModaR");
modaR.innerText = "La moda es: "+ moda;
}

calcularModa([1,200,40,6,200,200,15,50,900]);