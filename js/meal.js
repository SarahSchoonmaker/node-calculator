var Dish = require('./dish.js');
var Bill = require('./bill.js');
var Diner = require('./diner.js');

// Calculate tax and tip

var dish1 = new Dish(1, 'Salmon', 12);
var dish2 = new Dish(2, 'Chicken', 10);
var dish3 = new Dish(3, 'Spaghetti', 9);

var diner1 = new Diner("Santiago");
var diner2 = new Diner("Sarah");


diner1.addDish(dish1);
diner1.addDish(dish2);
diner1.addDish(dish3);

diner2.addDish(dish1);
// diner2.addDish(dish2);
// diner2.addDish(dish);

var bill = new Bill([diner1,diner2]);
bill.printTotal();


