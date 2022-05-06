Tests: 

Describe: Pizza(); 

Test: "It should return a Pizza object with three properties for size, toppings, and crust type."
Code: let myPizza = new Pizza("small", ["peppers", "olives", "onions"], "thin");
Expected Output: Pizza {size: "medium", toppings: ["peppers", "olives", "onions"], crust: "thin"}


Describe: price(); 

Test: "It will calculate the pizza cost based on size and toppings"
Code: let myPizza.price(); 
Expected Output: 18; 