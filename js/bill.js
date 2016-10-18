var Bill = function(diners){
  this.diners = diners;

}

Bill.prototype.printTotal=function(){
  var total=0;
  for(var i=0; i<this.diners.length; i++){
    total+= this.diners[i].calculateTotalAmount();
    console.log(this.diners[i].name+"'s Total is:"+this.diners[i].calculateTotalAmount()+"Tax:"+this.diners[i].taxAmount()+"Tip:"+this.diners[i].tipAmount());

  }
  console.log("Meal total is: $"+ total);
}

module.exports=Bill;