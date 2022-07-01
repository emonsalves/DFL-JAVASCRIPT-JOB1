// Verifica que la pagina cargue

window.onload = function () {
    console.log("Esta cargado el HTML");
}
 
let cantidadInput = document.querySelector("#cantidad");
let colorInput = document.querySelector("#color");

const precio = 400000;

// Funcion Calcular
function calcular() {
    console.log("Calculando");

    //Calculo
    let calculoTotal = Number(cantidadInput.value) * Number(precio);

    //Conversion a Clp
    let myNumeral = numeral(calculoTotal);
    let currencyString = myNumeral.format('$ 0,0');

    //Carga a Id desde Variables
    document.querySelector("#cantidadTotal").innerHTML = cantidadInput.value;

    document.querySelector("#valorTotal").innerHTML = currencyString;

    let circulo = document.querySelector("#circuloColor");
    circulo.style.backgroundColor = colorInput.value;
}

// Doy una accion al evento click
let botonCalcular = document.querySelector("#btnCalcular");
botonCalcular.addEventListener("click", calcular);
