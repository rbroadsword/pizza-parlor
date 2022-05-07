# P O S H pizza

#### Order a piiza fit for Posh herself

#### By: Ryan Broadsword

## Technologies Used 

* HTML
* CSS 
* Bootstrap
* jQuery 
* java script

## Description 

* User fills out form, chooses size, topppings, and crust. Then your order will appear with the price of the pizza. 

## Setup/Installation Requirements

* Clone this repository to your desktop. 
* Navigate to the directory. 
* Open index.html
* Fill out the form and click submit.

## Known Bugs 

* none

## License 

* Not currently licensed

## Contact Information 

* Ryan Broadsword - rbroadsword@gmail.com


Tests: 

Describe: Pizza(); 

Test: "It should return a Pizza object with three properties for size, toppings, and crust type."
Code: let myPizza = new Pizza("small", ["peppers", "olives", "onions"], "thin");
Expected Output: Pizza {size: "medium", toppings: ["peppers", "olives", "onions"], crust: "thin"}


Describe: price(); 

Test: "It will calculate the pizza cost based on size and add 1$ per topping."
Code: let myPizza.price(); 
Expected Output: 18; 