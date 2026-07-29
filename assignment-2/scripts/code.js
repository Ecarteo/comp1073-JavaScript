const studentInfoDiv = document.getElementById('student-info');
const studentPara = document.createElement('p');
studentPara.textContent = 'Student ID: 200630893 | Mateo Calderon Arce';
studentInfoDiv.appendChild(studentPara);

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