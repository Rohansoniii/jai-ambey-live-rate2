// ✅ Jai Ambey Jewellers Manual Rate Update

let rates = {
  goldBuy: 172596,
  goldSell: 172000,

  futureBuy: 176749,
  futureSell: 175100,

  presentBuy: 157703,
  presentSell: 159250,

  silverBuy: 351906,
  silverSell: 351906
};

// ✅ Display Rates on Website
document.getElementById("goldBuy").innerHTML = rates.goldBuy;
document.getElementById("goldSell").innerHTML = rates.goldSell;

document.getElementById("futureBuy").innerHTML = rates.futureBuy;
document.getElementById("futureSell").innerHTML = rates.futureSell;

document.getElementById("presentBuy").innerHTML = rates.presentBuy;
document.getElementById("presentSell").innerHTML = rates.presentSell;

document.getElementById("silverBuy").innerHTML = rates.silverBuy;
document.getElementById("silverSell").innerHTML = rates.silverSell;

// ✅ Scrolling Bar Values
document.getElementById("goldBarBuy").innerHTML = rates.goldBuy;
document.getElementById("goldBarSell").innerHTML = rates.goldSell;
document.getElementById("silverBarBuy").innerHTML = rates.silverBuy;

