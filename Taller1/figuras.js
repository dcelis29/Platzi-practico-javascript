/****CUADRADO******/
console.group("CUADRADO");
var lado = 5;

function perimetroCuadrado (ladoCuadrado){
    return ladoCuadrado * 4;
} 

function areaCuadrado (ladoCuadrado){
    return ladoCuadrado * ladoCuadrado;
}
console.groupEnd();


/****TRIÁNGULO******/
console.group("TRIÁNGULO");

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
} 

function areaTriangulo (base, altura){
    return (base * altura)/2;
} 
console.groupEnd();


/****CÍRCULO******/
console.group("CÍRCULO");
const PI = Math.PI;

function diametroCirculo (radio){
    return radio * 2;
} 

function perimetroCirculo (radio){
    return diametroCirculo(radio) * PI;
} 

function areaCirculo (radio){
    return PI * radio * radio;
} 
console.groupEnd();

function alturaIsoseles(ladoIso1, ladoIso2, baseIso){
    const altura = Math.sqrt((Math.pow(ladoIso1, 2)  - Math.pow((baseIso/2), 2)),2);
    return altura;  
}

/**********INTERACCIÓN CON HTML**************/

function calcularPerimetroCuadrado(ladoCuadrado){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    alert ("El perímetro del cuadrado es: " + perimetroCuadrado(value) + "cm");
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    alert ("El área del cuadrado es: " + areaCuadrado(value) + "cm²");
}

function calcularDiametroCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;
    alert("El diametro del círculo es: " + diametroCirculo(value) + "cm");
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;
    alert("El área del círculo es: " + areaCirculo(value) + "cm²");
}

function calcularAlturaIsoseles(){
    const inputLado1 = document.getElementById("InputLadoIso1");
    const valueLado1 = inputLado1.value;
    const inputLado2 = document.getElementById("InputLadoIso2");
    const valueLado2 = inputLado2.value;
    const inputBase = document.getElementById("InputBaseIso");
    const valueBase = inputBase.value;
    
    if(valueLado1 != valueLado2){
        alert ("No es un triángulo isósceles. Vuelve a intentarlo");
    }else{
        alert ("La altura del triángulo es: " + alturaIsoseles(valueLado1, valueLado2, valueBase) + "cm")
    }        
}