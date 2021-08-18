let moonCost = 5000;
let marsCost = 10000;

function handleQuantity(planet, operator) {
    let inputField = parseFloat(document.getElementById(planet + "Input").value);

    let quantity = inputField
    if (operator == 'plus') {
        quantity++
    } else if (inputField < 1) {
        return
    } else {
        quantity--
    }
    document.getElementById(planet + "Input").value = quantity
    journeyCost(planet)
};

let marsTotalCost = 0;
let moonTotalCost = 0;

function journeyCost(planet) {

    if (planet == 'mars') {
        marsTotalCost = updateUi(planet,marsCost)
    } else {
        moonTotalCost = updateUi(planet,moonCost)
    }
    updateTotal()
};

function updateUi(planet,cost) {
    let inputField = parseFloat(document.getElementById(planet + "Input").value);
    let totalCost = document.getElementById(planet + "Display").innerText = inputField * cost
    return totalCost
};

function updateTotal() {
    document.getElementById("totalDisplay").innerText = marsTotalCost + moonTotalCost
};