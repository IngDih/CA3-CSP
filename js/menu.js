
/* Total price */
var total_items = 14;
function CalculateItemsValue() {
    let total = 0;

    for (let i = 1; i < total_items; i++) {
        itemID = document.getElementById("qnt_" + i);
        total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
    }

    document.getElementById('ItemsTotal').innerHTML = "€" + total;
}

document.querySelectorAll('[id^="qnt_"]').forEach(item => {
    item.addEventListener('keyup', CalculateItemsValue);
})



/* Starters */
var total_items = 3;
function CalculateStartersValue() {
    let total = 0;

    for (let i = 1; i <= 3; i++) {
        itemID = document.getElementById("qnt_" + i);
        total = total + parseInteger(itemID.value) * parseInt(itemID.getAttribute("data-price"));
    }

    document.getElementById('StartersTotal').innerHTML = "€" + total.toFixed(2);
}

document.querySelectorAll('[id^="qnt_1"], [id^="qnt_2"], [id^="qnt_3"]').forEach(item => {
    item.addEventListener('keyup', CalculateStartersValue);
})



/* Mains */
var total_items = 4;
function CalculateMainsValue() {

    let total = 0;

    for (let i = 4; i <= 7; i++) {
        itemID = document.getElementById("qnt_" + i);
        total = total + parseInteger(itemID.value) * parseInt(itemID.getAttribute("data-price"));
    }

    document.getElementById('MainsTotal').innerHTML = "€" + total.toFixed(2);
}

document.querySelectorAll('[id^="qnt_4"], [id^="qnt_5"], [id^="qnt_6"], [id^="qnt_7"]').forEach(item => {
    item.addEventListener('keyup', CalculateMainsValue);
})



/* Desserts */
var total_items = 3;
function CalculateDessertsValue() {

    let total = 0;

    for (let i = 8; i <= 10; i++) {
        itemID = document.getElementById("qnt_" + i);
        total = total + parseInteger(itemID.value) * parseInt(itemID.getAttribute("data-price"));
    }

    document.getElementById('DessertsPrice').innerHTML = "€" + total.toFixed(2);
}

document.querySelectorAll('[id^="qnt_8"], [id^="qnt_9"], [id^="qnt_10"]').forEach(item => {
    item.addEventListener('keyup', CalculateDessertsValue);
})



/* Drinks */
var total_items = 5;
function CalculateDrinksValue() {

    let total = 0;

    for (let i = 11; i <= 15; i++) {
        itemID = document.getElementById("qnt_" + i);
        total = total + parseInteger(itemID.value) * parseInt(itemID.getAttribute("data-price"));
    }

    document.getElementById('DrinksPrice').innerHTML = "€" + total.toFixed(2);
}

document.querySelectorAll('[id^="qnt_11"], [id^="qnt_12"], [id^="qnt_13"], [id^="qnt_14"], [id^="qnt_15"]').forEach(item => {
    item.addEventListener('keyup', CalculateDrinksValue);
})



