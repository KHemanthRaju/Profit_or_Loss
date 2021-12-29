const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const showBtn = document.querySelector("#show-Btn");
const outputBox = document.querySelector("#output");

function calculatePrice(){
    var ip = initialPrice.value;
    var sq = stocksQuantity.value;
    var cp = currentPrice.value;

    calculateProfitAndLoss(ip, sq, cp);
}

function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

function calculateProfitAndLoss(initial,quantity,current){
    if(initial > current){
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss/initial) * 100;

        outputBox.innerText = `Hey the loss is ${loss} and the percent is ${financial(lossPercentage)}%`;
    }else if(initial < current){
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit/initial) * 100;

        outputBox.innerText = `Hey the profit is ${profit} and the percent is ${profitPercentage}%`;
    }else{
        outputBox.innerText = `No gain or no loss`;
    }
}

showBtn.addEventListener('click',calculatePrice);