const mobilePhones = [
  {
    brand: "Samsung",
    model: "A30",
    price: "40000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "Samsung",
    model: "A10",
    price: "40000",
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
  },
  {
    brand: "Samsung",
    model: "A20",
    price: "40000",
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
  },
  {
    brand: "Vivo",
    model: "Y20",
    price: "20000",
    camera: "40px",
    ram: "2gb",
    rom: "32gb",
  },
  {
    brand: "Vivo",
    model: "Y11",
    price: "20000",
    camera: "40px",
    ram: "3gb",
    rom: "32gb",
  },
  {
    brand: "Vivo",
    model: "Y15",
    price: "30000",
    camera: "40px",
    ram: "4gb",
    rom: "64gb",
  },
  {
    brand: "Motorola",
    model: "123",
    price: "5000",
    camera: "2px",
    ram: "2gb",
    rom: "32gb",
  },
  {
    brand: "Iphone",
    model: "12",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "Iphone",
    model: "13",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "Iphone",
    model: "X",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const searchTypeSelect = document.getElementById("searchType");
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const resultContainer = document.getElementById("resultContainer");

  searchButton.addEventListener("click", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const searchType = searchTypeSelect.value;

    const filteredPhones = mobilePhones.filter((phone) => {
      const fieldValue = phone[searchType].toString().toLowerCase();
      return fieldValue.includes(searchTerm);
    });

    displayResults(filteredPhones);
  });

  function displayResults(phones) {
    resultContainer.innerHTML = "";

    if (phones.length === 0) {
      resultContainer.innerHTML = "<p>No matching phones found.</p>";
      return;
    }

    const resultList = document.createElement("ul");

    phones.forEach((phone) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${phone.brand} ${phone.model} - Price: $${phone.price}, Camera: ${phone.camera} MP`;
      resultList.appendChild(listItem);
    });

    resultContainer.appendChild(resultList);
  }
});
