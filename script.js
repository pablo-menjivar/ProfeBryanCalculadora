// Seleccionar elementos del DOM
const form = document.getElementById('discountForm');
const purchaseAmountInput = document.getElementById('purchaseAmount');
const resultDiv = document.getElementById('result');
//Funcion para calcular y mostrar el descuento
function calculateDiscount(event) {
    event.preventDefault();
    //Obtengo el monto ingresado y lo convierto a dato numerico
    const purchaseAmount = parseFloat(purchaseAmountInput.value);
    //Validar que el monto sea un numero positivo mayor que cero
    if (isNaN(purchaseAmount) || purchaseAmount <= 0) {
        resultDiv.innerHTML = '<p class="text-danger">Por favor, ingrese un monto válido mayor que cero.</p>';
        return;
    }
    //Determino el porcentaje de descuento según el monto
    let discountPercentage;
    if (purchaseAmount >= 1000) {
        discountPercentage = 15;
    } else if (purchaseAmount >= 500 && purchaseAmount <= 999) {
        discountPercentage = 10;
    } else {
        discountPercentage = 5;
    }
    //Calculo el monto del descuento y el precio final
    const discountAmount = (purchaseAmount * discountPercentage) / 100;
    const finalPrice = purchaseAmount - discountAmount;
    //Muestro el resultado con formato de dos decimales
    resultDiv.innerHTML = `
        <p><strong>Monto original:</strong> $${purchaseAmount.toFixed(2)}</p>
        <p><strong>Descuento aplicado:</strong> ${discountPercentage}%</p>
        <p><strong>Monto del descuento:</strong> $${discountAmount.toFixed(2)}</p>
        <p class="fw-bold text-success"><strong>Precio final:</strong> $${finalPrice.toFixed(2)}</p>
    `;
}
//Agregamos el event listener al formulario
form.addEventListener('submit', calculateDiscount);