
const time = new Date()
document.getElementById('date').innerText = time.toLocaleDateString();




document.getElementById('submit-buyer').addEventListener("click", function () {
    const buyerDatails = document.getElementById('input-buyer');
    console.log('buyerDatails', buyerDatails.value)
    document.getElementById("invoice-to").innerText = buyerDatails.value;
    buyerDatails.value = ''

})

document.getElementById('add').addEventListener("click", function () {
    const itemTable = document.getElementById('list-item');
    const itemName = document.getElementById('Item-name');
    const itemPrice = document.getElementById('price');
    const itemQuantity = document.getElementById('quantity');

    const totalPrice = parseInt(itemPrice.value) * parseInt(itemQuantity.value)

    const createTR = document.createElement('tr');
    const createTh = document.createElement('th');
    const createTd1 = document.createElement('td');
    const createTd2 = document.createElement('td');
    const createTd3 = document.createElement('td');

    createTd3.classList.add("item-total");
    createTh.innerText = itemName.value;
    createTd1.innerText = itemPrice.value;
    createTd2.innerText = itemQuantity.value;
    createTd3.innerText = totalPrice;

    createTR.appendChild(createTh)
    createTR.appendChild(createTd1)
    createTR.appendChild(createTd2)
    createTR.appendChild(createTd3)
    itemTable.appendChild(createTR)

    itemName.value = '';
    itemPrice.value = '';
    itemQuantity.value = '';

    const subTotalInput = document.getElementById('sub-total');
    subTotalInput.innerText = AddsubTotal();

    const subTotalFinal = parseInt(subTotalInput.innerText);

    const tax = AddsubTotal() * .15;
    document.getElementById('tax').innerText = tax.toFixed(2);

    const totalAmount = subTotalFinal + tax;
    document.getElementById('total-amount').innerText = totalAmount;
    document.getElementById('total').innerText = totalAmount;


})

function AddsubTotal() {
    let subTotal = 0;
    const cost = document.getElementsByClassName('item-total');
    for (let i = 0; i < cost.length; i++) {
        const element = cost[i];
        const price = parseInt(element.innerText)
        subTotal = subTotal + price;

    }

    return subTotal;

}