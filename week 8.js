//Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
//Use at least one array.
//Use at least two classes.
//Your menu should have the options to create, view, and delete elements.

//cars Menu

//cars Array

//class cars
//make
//model

class Car{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
}  
//class Menu
class Menu{
    constructor(){
//cars array
    this.cars = [];
    }
}

  //see a menu


  //add cars
  //prompt for a make
  //prompt for a model
  //create new car and push car into array

  addCar();{
    let carMake = prompt("Enter car make:");
    let carModel = prompt ("Enter the car model:");
    this.cars.push(new Car (carMake, carModel));
  }

  //delete cars
  deleteCar(){
    let carIndex = prompt("Enter car index to DELETE")
    this.cars.splice(carIndex,1);
}

  //view cars

viewCars();{
    let displayCars = '';
    for(let i=0, i < this.cars.length; i++){

       displayCars += '
       ${this.cars[i].make} ${this.cars[i].model}'
    
    }
    
    alert('
    Car Inventory:
    ----------------
    ${displayCars} 
    ');
}

  //start the menu

//instantiate the menu and invoke the start method

let car1 = new Car("Honda", "Civic");
console.log (car1);

let menu = new Menu();

menu.addCar();
menu.viewCars();
menu.deleteCar();
menu.viewCars();


