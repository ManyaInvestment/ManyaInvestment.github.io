function calculate(){
let investAmount = document.getElementById('MonthlyInvest').value;
let amountWithComma = (investAmount.split(" ")[0]);
let amount = parseInt(amountWithComma.split(',').join(''));
let TimePeriod = document.getElementById('TimePeriod').value;
let Annualrate = document.getElementById('ExpectedRate').value; //Annual rate

    if(investAmount =='' || investAmount > 100000 || investAmount < 500 && TimePeriod=='' || TimePeriod>=30 &&  Annualrate=='' ||  Annualrate > 30 ){
        alert("Please enter Proper values.. ");
    }else{
    /*--------Total InvestMent----------*/
    let months = TimePeriod * 12;
    let annualinvest = investAmount * months;
    let monthlyrate = Annualrate / 12 / 100; // Rate of interest
    // document.getElementById('Total').innerHTML = isNaN(amount)?0:amount;
    document.getElementById('Total').innerHTML ="₹ " + annualinvest;
    // document.getElementById('mon').innerHTML =  "Months : " + months
    /*------------ Future Amount ------------*/
    let profitAmt = amount * (Math.pow(1+monthlyrate,months)-1)/monthlyrate;
    let roundProfit = Math.round(profitAmt) - 1;
    if(isNaN(roundProfit)){
        roundProfit =0;
    }
    document.getElementById('futurevalue').innerHTML = "₹ " + roundProfit;     
    
    let ExceptedRatio = profitAmt - annualinvest;
    let roundRatio = Math.round(ExceptedRatio) - 1;
    if(isNaN(roundRatio)){
        roundRatio=0;
    }
    document.getElementById('ExceptedAmt').innerHTML = "₹ " + roundRatio;
}
    // document.getElementById('MonthlyInvest').value=" ";
    // document.getElementById('TimePeriod').value=" ";
    // document.getElementById('ExpectedRate').value = " ";
}