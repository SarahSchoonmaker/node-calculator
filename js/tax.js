function computeAmount(base, percentage) {
	return base * percentage;
}

function TaxAndTip(totalCost){
	var taxRate = .05;   
	var tipRate = .20;
	var taxValue = computeAmount(totalCost, taxRate);
	var preTipCost = taxValue + totalCost;
	var tipValue = computeAmount(totalCost, tipRate);
	var totalCost = preTipCost + tipValue;
	var message = ("Tax for your meal is $" + taxValue.toFixed(2) + '. ' +
								"You should leave this $" + tipValue.toFixed(2) + " for tip. " +
								"The total cost for your meal is $" + totalCost.toFixed(2) + '.');
	console.log(message);
}

module.exports = TaxAndTip;
