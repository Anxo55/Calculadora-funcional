let displayValue = '';

function appendToDisplay(value) {
    displayValue+= value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function calcular() {
   try {
    const resultado = eval(displayValue);
    displayValue = resultado.toString();
    document.getElementById('display').value = displayValue;
   } catch (error) {
    displayValue = 'error';
    document.getElementById('display').value = displayValue;
   } 
}