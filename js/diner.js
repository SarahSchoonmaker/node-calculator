var Diner = function(name){
  this.name = name;
  this.dishes = [];
};

Diner.prototype.addDish = function(dish){
  this.dishes.push(dish);
};

Diner.prototype.calculateTotalAmount = function (){
  var total = 0;

  this.dishes.forEach(function(item){
    total += item.price;
  });

  this.totalAmount = total;
  return this.totalAmount + this.tipAmount()+this.taxAmount();

};

// Taxes and Tip

Diner.prototype.tipAmount = function () {
  return this.totalAmount * .20;
}

Diner.prototype.taxAmount = function() {
  return this.totalAmount *.05;
}


module.exports=Diner;
