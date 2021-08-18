let marsCost = 0;
let moonCost = 0;

// set input value
function getPerson(id, val) {
    const inputField = document.getElementById(id);
    const check = parseFloat(inputField.value) + val
    if (0 <= check) {
        inputField.value = parseFloat(inputField.value) + val
        return inputField.value
    } return 0
}
// increase and add display
function countFunc(cost, person) {
    return cost * person
}
// update display
function updateDisplay(id, val) {
    document.getElementById(id).innerText = val
}
//update total
function totalDisplay() {
    const valueTotal = marsCost + moonCost;
    updateDisplay('totalDisplay', valueTotal)
}
// mars calculation
function marsCalc(person) {
    let countUpdate = countFunc(120000, person)
    updateDisplay('marsDisplay', countUpdate)
    marsCost = countUpdate
    totalDisplay()
}
// moon calculation
function moonCalc(person) {
    let countUpdate = countFunc(80000, person)
    updateDisplay('moonDisplay', countUpdate)
    moonCost = countUpdate
    totalDisplay()
}
// fire mars add person btn
document.getElementById('marsAdd').addEventListener('click', function () {
    let person = getPerson('marsInput', 1)
     marsCalc(person) 
});
// fire mars minus person btn
document.getElementById('marsMinus').addEventListener('click', function () {
    let person = getPerson('marsInput', -1)
    marsCalc(person) ;
});
// fire moon add person btn
document.getElementById('moonAdd').addEventListener('click', function () {
    let person = getPerson('moonInput', 1)
    moonCalc(person) 
});
// fire moon minus person btn
document.getElementById('moonMinus').addEventListener('click', function () {
    let person = getPerson('moonInput', -1)
    moonCalc(person) 
});
