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

//UI 
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault(); 
  const firstName = $("#firstName").val(); 
  const lastName = $("#lastName").val(); 
  const fullName = firstName + " " + lastName; 
  const toppings = []; 
  $("input:checkbox[name='topping']:checked").each(function() {
    toppings.push($(this).val());
  });
  console.log(toppings);
  });
})