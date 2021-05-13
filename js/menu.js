/* Total price */

function CalculateItemsValue() {
    let total_items = 15;
    let total = 0;

    for (let i = 1; i <= total_items; i++) {
        itemID = document.getElementById("qnt_" + i);
        console.log("qnt_" + i + " " + itemID.value);
        total = total + parseFloat(itemID.value) * parseFloat(itemID.getAttribute("data-price"));
    }

    document.getElementById('ItemsTotal').innerHTML = "€" + total.toFixed(2);
}

document.querySelectorAll('[id^="qnt_"]').forEach(item => {
    item.addEventListener('keyup', CalculateItemsValue);
})



/* Starters */
function CalculateStartersValue() {
    let total = 0;

    for (let i = 1; i <= 3; i++) {
        itemID = document.getElementById("qnt_" + i);
        total = total + parseFloat(itemID.value) * parseFloat(itemID.getAttribute("data-price"));
    }

    document.getElementById('StartersTotal').innerHTML = "€" + total.toFixed(2);
}

document.querySelectorAll('[id^="qnt_1"], [id^="qnt_2"], [id^="qnt_3"]').forEach(item => {
    item.addEventListener('keyup', CalculateStartersValue);
})



/* Mains */
function CalculateMainsValue() {
    let total = 0;

    for (let i = 4; i <= 7; i++) {
        itemID = document.getElementById("qnt_" + i);
        total = total + parseFloat(itemID.value) * parseFloat(itemID.getAttribute("data-price"));
    }

    document.getElementById('MainsTotal').innerHTML = "€" + total.toFixed(2);
}

document.querySelectorAll('[id^="qnt_4"], [id^="qnt_5"], [id^="qnt_6"], [id^="qnt_7"]').forEach(item => {
    item.addEventListener('keyup', CalculateMainsValue);
})



/* Desserts */
function CalculateDessertsValue() {

    let total = 0;

    for (let i = 8; i <= 10; i++) {
        itemID = document.getElementById("qnt_" + i);
        total = total + parseFloat(itemID.value) * parseFloat(itemID.getAttribute("data-price"));
    }

    document.getElementById('DessertsTotal').innerHTML = "€" + total.toFixed(2);
}

document.querySelectorAll('[id^="qnt_8"], [id^="qnt_9"], [id^="qnt_10"]').forEach(item => {
    item.addEventListener('keyup', CalculateDessertsValue);
})



/* Drinks */
function CalculateDrinksValue() {

    let total = 0;

    for (let i = 11; i <= 15; i++) {
        itemID = document.getElementById("qnt_" + i);
        total = total + parseFloat(itemID.value) * parseFloat(itemID.getAttribute("data-price"));
    }

    document.getElementById('DrinksTotal').innerHTML = "€" + total.toFixed(2);
}

document.querySelectorAll('[id^="qnt_11"], [id^="qnt_12"], [id^="qnt_13"], [id^="qnt_14"], [id^="qnt_15"]').forEach(item => {
    item.addEventListener('keyup', CalculateDrinksValue);
})



