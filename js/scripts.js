//Business Logic for Pizza ---

function Pizza(size, crust, toppings) {
  this.size = size; 
  this.crust = crust; 
  this.toppings = toppings; 
  this.total = 0; 
}

Pizza.prototype.price = function() { 
  let numberOfToppings = 0; 

  if (this.size === "large") {
    this.total += 20; 
  } else if (this.size === "medium") {
    this.total += 15; 
  }else if (this.size === "small") {
    this.total += 10; 
  } 
   
  numberOfToppings +=  parseInt(this.toppings.length); 
  this.total += numberOfToppings * 1; 
}