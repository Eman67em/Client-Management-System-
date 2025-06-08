document.getElementById("customerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const account = document.getElementById("account").value;
    const type = document.getElementById("type").value;
    const balance = document.getElementById("balance").value;

    const customer = {
        name,
        account,
        type,
        balance
    };

    let customers = JSON.parse(localStorage.getItem("customers")) || [];
    customers.push(customer);
    localStorage.setItem("customers", JSON.stringify(customers));

    displayCustomers();
    this.reset();
});

function displayCustomers() {
    const list = document.getElementById("customerList");
    list.innerHTML = "";

    const customers = JSON.parse(localStorage.getItem("customers")) || [];

    customers.forEach((customer, index) => {
        const item = document.createElement("li");
        item.innerHTML = `
            <strong>${customer.name}</strong> (Acc#: ${customer.account}) – ${customer.type} – $${customer.balance}
            <button onclick="deleteCustomer(${index})">Delete</button>
        `;
        list.appendChild(item);
    });
}

function deleteCustomer(index) {
    let customers = JSON.parse(localStorage.getItem("customers")) || [];
    customers.splice(index, 1);
    localStorage.setItem("customers", JSON.stringify(customers));
    displayCustomers();
}

window.onload = displayCustomers;