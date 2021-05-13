function getJSON() {
    fetch('users.json')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
}

var numItems = 12;
function CalculateItemsValue() {
    var total = 0;

    for (let i = 1; i < numItems; i++) {
        itemID = document.getElementById("qnt_" + i);
        total = total + parseInteger(itemID.value) * parseInt(itemID.getAttribute("data-price"));
        const element = array[i];

    }

    document.getElementById('TotalPrice').innerHTML = "€" + total;
}

document.querySelectorAll('[id^="qnt_"]').forEach(item => {
    item.addEventListener('keyup', CalculateItemsValue);
})