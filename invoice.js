
const time = new Date()
document.getElementById('date').innerText = time.toLocaleDateString();




document.getElementById('submit-buyer').addEventListener("click", function () {
    const buyerDatails = document.getElementById('input-buyer');
    console.log('buyerDatails', buyerDatails.value)
    document.getElementById("invoice-to").innerText = buyerDatails.value;
    buyerDatails.value = ''

})