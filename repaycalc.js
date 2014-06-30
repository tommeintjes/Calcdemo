function showpay() {
 if ((document.calc.loan.value == null || document.calc.loan.value.length == 0) ||
     (document.calc.months.value == null || document.calc.months.value.length == 0)||
     (document.calc.rate.value == null || document.calc.rate.value.length == 0))
 { document.calc.pay.value = "Incomplete data";
 }
 else
 {
 var princ = document.calc.loan.value;
 var term  = document.calc.months.value;
 var intr  = document.calc.rate.value / 1200;
 
  var pay = princ * intr / (1 - (Math.pow(1/(1 + intr), term*12)));
  document.calc.pay.value = 'R ' + rounding(Math.round(pay*100)/100);
 }
// payment = principal * monthly interest/(1 - (1/(1+MonthlyInterest)*Months))
}
            function rounding(n)
            {
                pennies = n * 100 ;
                pennies = Math.round(pennies) ;
                strPennies = "" + pennies ;
                len = strPennies.length ;
                if(len<=1){
                    return '0.0'+strPennies;
                }else if(len<=2){
                    return "0." + strPennies.substring((len - 2), len);
                }else if(len<=5){
                    return strPennies.substring(0, len - 2) + "." + strPennies.substring((len - 2), len);
                }else if(len<=8){
                    return strPennies.substring(0, len - 5) + " " + strPennies.substring(len -5, len - 2) + "." + strPennies.substring((len - 2), len);
                }else if(len<=11){
                    return strPennies.substring(0, len - 8) + " " + strPennies.substring(len -8, len - 5) + " " + strPennies.substring(len -5, len - 2) + "." + strPennies.substring((len - 2), len);
                }else{
                    return strPennies.substring(0, len - 8) + " " + strPennies.substring(len -8, len - 5) + " " + strPennies.substring(len -5, len - 2) + "." + strPennies.substring((len - 2), len);
                }
            }
