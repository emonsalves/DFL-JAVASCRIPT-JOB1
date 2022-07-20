window.onload = function () { console.log("Esta cargado el HTML"); }
let cantidadInput = document.querySelector("#cantidad");
let colorInput = document.querySelector("#color");
const precio = 400000;
function calcular() {
    console.log("Calculando");
    let calculoTotal = Number(cantidadInput.value) * Number(precio);
    let myNumeral = numeral(calculoTotal);
    let currencyString = myNumeral.format('$ 0,0');
    document.querySelector("#cantidadTotal").innerHTML = cantidadInput.value;
    document.querySelector("#valorTotal").innerHTML = currencyString;
    let circulo = document.querySelector("#circuloColor");
    circulo.style.backgroundColor = colorInput.value;
}
let botonCalcular = document.querySelector("#btnCalcular");
botonCalcular.addEventListener("click", calcular);