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
  const address = $("#address").val(); 
  const phoneNumber = $("#phone").val(); 
  const size = $("#size").val();  
  const crust = $("#crust").val(); 
  const toppings = []; 
  $("input:checkbox[name='topping']:checked").each(function() {
    toppings.push($(this).val());
  });

  let myOrder = new Pizza(size, crust, toppings);

  myOrder.price(); 
  let cost = myOrder.total; 
  console.log(cost); 

  $(".fullName").text(fullName); 
  $(".display-size").text(size); 
  $(".display-crust").text(crust); 
  $(".display-toppings").text(toppings); 
  $(".display-total").text(cost); 
  console.log(myOrder);
  });
})