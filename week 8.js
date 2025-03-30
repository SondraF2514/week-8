//Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
//Use at least one array.
//Use at least two classes.
//Your menu should have the options to create, view, and delete elements.

//cars Menu

//cars Array

//class cars
//make
//model

class Car {
  constructor(make, model) {
      this.make = make;
      this.model = model;
  }
}

class Menu {
  constructor() {
      this.cars = [];
  }

  // Add car method
  addCar() {
      let carMake = prompt("Enter car make:");
      let carModel = prompt("Enter the car model:");
      this.cars.push(new Car(carMake, carModel));
      alert("Car added successfully!");
  }

  // Delete car method
  deleteCar() {
      let carIndex = prompt("Enter car index to DELETE:");
      if (carIndex >= 0 && carIndex < this.cars.length) {
          this.cars.splice(carIndex, 1);
          alert("Car deleted successfully!");
      } else {
          alert("Invalid index. Please try again.");
      }
  }

  // View all cars method
  viewAllCars() {
      let displayCars = "";
      for (let i = 0; i < this.cars.length; i++) {
          displayCars += `${i}) ${this.cars[i].make} ${this.cars[i].model}\n`;
      }
      alert(`
      Car Inventory:
      ---------------
      ${displayCars || "No cars available."}
      `);
  }

  // Show main menu
  showMainMenu() {
      return prompt(`
      Main Menu:
      ---------------
      0) Exit Menu
      1) Add Car
      2) Delete Car
      3) View All Cars
      `);
  }

  // Start the menu
  start() {
      let selection = this.showMainMenu();

      while (selection != "0") {
          switch (selection) {
              case "1":
                  this.addCar();
                  break;
              case "2":
                  this.deleteCar();
                  break;
              case "3":
                  this.viewAllCars();
                  break;
              default:
                  alert("Invalid option. Please try again.");
          }
          selection = this.showMainMenu();
      }
      alert("Exiting Menu---goodbye!");
  }
}

// Instantiate the Menu and start the program
let menu = new Menu();
menu.start();

