// add student info
const studentInfoDiv = document.getElementById('student-info');
const studentPara = document.createElement('p');
studentPara.textContent = 'Student ID: 200630893 | Mateo Calderon Arce';
studentInfoDiv.appendChild(studentPara);

// pizza class and order details
class Pizza {
  constructor(size, crust, toppings, drinks, dips, instructions) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.drinks = drinks;
    this.dips = dips;
    this.instructions = instructions;
  }

  getOrderDescription() {
    let description = `<strong>Size:</strong> ${this.size}<br>`;
    description += `<strong>Crust:</strong> ${this.crust}<br>`;
    
    // Check if arrays have items before joining, otherwise list as None
    description += `<strong>Toppings:</strong> ${this.toppings.length > 0 ? this.toppings.join(', ') : 'None'}<br>`;
    description += `<strong>Drinks:</strong> ${this.drinks.length > 0 ? this.drinks.join(', ') : 'None'}<br>`;
    description += `<strong>Dips:</strong> ${this.dips.length > 0 ? this.dips.join(', ') : 'None'}<br>`;
    
    if (this.instructions.trim() !== '') {
      description += `<strong>Special Instructions:</strong> ${this.instructions}`;
    }

    return description;
  }
}

// set up event listener to validate inputs
const form = document.getElementById('pizza-form');
const outputSection = document.getElementById('order-output');

form.addEventListener('submit', function(event) {
    // Prevent the default form submission (page reload)
    event.preventDefault();

    // Capture the selected size (radio button)
    const size = document.querySelector('input[name="size"]:checked').value;

    // Capture the selected crust (dropdown)
    const crust = document.getElementById('crust').value;

    // Capture all selected checkboxes and map them to an array of their values
    const toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(cb => cb.value);
    const drinks = Array.from(document.querySelectorAll('input[name="drinks"]:checked')).map(cb => cb.value);
    const dips = Array.from(document.querySelectorAll('input[name="dips"]:checked')).map(cb => cb.value);

    // Capture special instructions (textarea)
    const instructions = document.getElementById('instructions').value;

    // Instantiate a new Pizza object with the captured values
    const customerOrder = new Pizza(size, crust, toppings, drinks, dips, instructions);

    // Output the description to the page using the object's method
    outputSection.innerHTML = `<h2>Order Summary</h2><p>${customerOrder.getOrderDescription()}</p>`;
});