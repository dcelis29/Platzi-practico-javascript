function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = precio * (porcentajePrecioConDescuento / 100);

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const InputDiscount = document.getElementById("InputDiscount");
    const discountValue = InputDiscount.value;
    const coupons = ["Diego", "Kitara", "Laura"]

    if(!coupons.includes(discountValue)){
        alert("Cupón inválido");
    }

    let descuento;

    switch(discountValue) {
      case "Diego":
        discount = 15;
      break;
      case "Laura":
        discount = 30;
      break;
      case "Kitara":
        discount = 25;
      break;
    }
        
        const precioFinal = calcularPrecioConDescuento(priceValue, discount);      
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento es de $" + precioFinal;   
} 


  