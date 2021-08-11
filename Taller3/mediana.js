function ordenarLista(a,b){
    return a - b;
}

function calcularMediana(lista){
    lista.sort(ordenarLista);
    let mediana;
    const medianaLista = (lista.length/2);

    if (esPar(lista.length)){
        mediana = (lista[medianaLista] + lista[medianaLista-1])/2            
    }else{
        mediana = lista[medianaLista];
    }
    
    const medianaR = document.getElementById("MedianaR");
    medianaR.innerText = "La mediana es: " + mediana;
}

function esPar(num){
    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }   
}

calcularMediana([10,9,100,3]);