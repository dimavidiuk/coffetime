function calculateTotal() {
    let inputs = document.querySelectorAll("input[type='number']");
    let total = 0;

    inputs.forEach(input => {
        let price = Number(input.dataset.price);
        let quantity = Number(input.value);
        total += price * quantity;
    });

    document.getElementById("total").textContent = total;
}