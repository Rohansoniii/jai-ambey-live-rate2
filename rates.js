let rates = {
  goldBuy: 177000,
  goldSell: 169100,

  futureBuy: 176749,
  futureSell: 175100,

  presentBuy: 164550,
  presentSell: 159250,

  silverBuy: 89000,
  silverSell: 87000
};

// ✅ Top ticker + cards
document.getElementById("goldBuy").innerHTML = rates.goldBuy;
document.getElementById("goldSell").innerHTML = rates.goldSell;
document.getElementById("silverBuy").innerHTML = rates.silverBuy;

document.getElementById("goldBuyCard").innerHTML = rates.goldBuy;
document.getElementById("goldSellCard").innerHTML = rates.goldSell;
document.getElementById("silverBuyCard").innerHTML = rates.silverBuy;

// ✅ Table values
document.getElementById("goldBuyTable").innerHTML = rates.goldBuy;
document.getElementById("goldSellTable").innerHTML = rates.goldSell;

document.getElementById("futureBuy").innerHTML = rates.futureBuy;
document.getElementById("futureSell").innerHTML = rates.futureSell;

document.getElementById("presentBuy").innerHTML = rates.presentBuy;
document.getElementById("presentSell").innerHTML = rates.presentSell;

document.getElementById("silverBuyTable").innerHTML = rates.silverBuy;
document.getElementById("silverSell").innerHTML = rates.silverSell;
