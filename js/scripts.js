//Business Logic for Pizza ---

function Pizza(size, crust, toppings) {
  this.size = size; 
  this.crust = crust; 
  this.toppings = toppings; 
  this.total = 0; 
}

Pizza.prototype.price = function() { 
  let numberOfToppings = 0; 
  if (this.size === "Large") {
    this.total += 20; 
  } else if (this.size === "Medium") {
    this.total += 15; 
  }else if (this.size === "Small") {
    this.total += 10; 
  } 
  numberOfToppings +=  parseInt(this.toppings.length); 
  this.total += numberOfToppings * 1; 
}

//UI 
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault(); 
  $(".order").hide(); 
  $(".hide-order").show(); 
  const firstName = $("#firstName").val(); 
  const lastName = $("#lastName").val(); 
  const fullName = firstName + " " + lastName;
  const street = $("#street").val(); 
  const city = $("#city").val();
  const zip = $("#zip").val();
  const address = street + ", " + city + " " + zip; 
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

  $(".fullName").text(fullName); 
  $(".display-size").text(size); 
  $(".display-crust").text(crust); 
  $(".display-toppings").text(toppings.join(" , ")); 
  $(".display-total").text(cost + "$");
  $(".address").text(address); 
  });

  $("#back").click(function(event) {
    event.preventDefault(); 
    $(".order").show(); 
  $(".hide-order").hide();
  $("#pizza").each(function(){
    this.reset();
  });
  })
})