function handleQuantity(planet, cost, operator) {
    
    const inputField = document.getElementById(planet + 'Input');
    const inputText = inputField.value;
    let inputValue = parseInt(inputText);
    if (isNaN(inputValue)){
        inputField.value = 0
        updateUi(planet, 0)
        return
    }
    if (operator == 'plus') {
        inputValue++
    } else if (inputValue < 1) {
        updateUi(planet, 0)
        return
    } else if (operator == 'minus') {
        inputValue--
    } 
    inputField.value = inputValue;
    const costPerPlanet = inputValue * cost
    updateUi(planet, costPerPlanet)
}
function updateUi(planet, cost) {
    document.getElementById(planet + "Display").innerText = cost
    const marsCost = document.getElementById('marsDisplay').innerText;
    const moonCost = document.getElementById('moonDisplay').innerText;
    document.getElementById('totalDisplay').innerText = parseInt(marsCost) + parseInt(moonCost);
} 

