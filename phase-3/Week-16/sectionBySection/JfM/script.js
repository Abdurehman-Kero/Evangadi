function displayForm(showElementClass) {
  // Get all elements that are part of your "form" sections
  const formSections = document.querySelectorAll(".new, .list, .edit, .delete");

  // Hide all form sections first
  formSections.forEach((section) => {
    section.style.display = "none";
  });

  // Show only the desired section
  const elementToShow = document.querySelector(`.${showElementClass}`);
  if (elementToShow) {
    elementToShow.style.display = "block";
  }
}

const createCustomer = (e) => {
  e.preventDefault();

  const name = document.querySelector("#create-form input[name=name]").value;
  const address = document.querySelector(
    "#create-form input[name=address]"
  ).value;
  const company = document.querySelector(
    "#create-form input[name=company]"
  ).value;

  fetch("http://localhost:3000/add-customer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, address, company }),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to add customer");
      return res.json();
    })
    .then(() => alert("Customer added successfully!"))
    .catch((err) => console.log(err));
};

document
  .getElementById("create-form")
  .addEventListener("submit", createCustomer);

  const getCustomer =()=>{
    const customerName = document.getElementById('data');
    customerName.innerHTML = '';
    fetch("http://localhost:3000/customer")
      .then((res) => res.json())
      .then((data) =>
        data?.map(
          (customer) =>
            (customerName.innerHTML += `<div class="row">
  <h2 class="col-2">${customer.customer_id}</h2>
  <h2 class="col-4">${customer.name}</h2>
  <h2 class="col-3">${customer.address}</h2>
  <h2 class="col-3">${customer.company}</h2>
</div>
<hr>
`)
        )
      )
      .catch((err) => console.log(err));
  }
document
  .getElementById("btn-warning")
  .addEventListener("click", getCustomer);

const updateCustomer = (e) => {
  e.preventDefault(); 
  fetch("http://localhost:3000/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      newName: document.querySelector("#update-form input[name=updatedName]").value,
      id: document.querySelector("#update-form input[name=id]").value,
    }),
  })
    .then(() => alert("Name updated successfully!"))
    .catch((err) => console.error("Error updating:", err));
};

const updatedCustomer = (e) => {
  e.preventDefault(); 
  fetch("http://localhost:3000/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      newName: document.querySelector("#update-form input[name=updatedName]").value,
      id: document.querySelector("#update-form input[name=id]").value,
    }),
  })
    .then(() => alert("Name updated successfully!"))
    .catch((err) => console.error("Error updating:", err));
};

document
  .getElementById("update-form")
  .addEventListener("submit", updateCustomer);

const deletedCustomer = (e) => {
  e.preventDefault(); 
  fetch("http://localhost:3000/delete", {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: document.querySelector("#delete-form input[name=id]").value
    }),
  })
    .then(() => alert("customer information deleted successfully!"))
    .catch((err) => console.error("Error updating:", err));
};

document
  .getElementById("delete-form")
  .addEventListener("submit", deletedCustomer);
 
