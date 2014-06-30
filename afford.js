// JavaScript Document

function showloan() {
 if ((document.calc.grossincome.value == null || document.calc.grossincome.value.length == 0) ||
     (document.calc.allexpenses.value == null || document.calc.allexpenses.value.length == 0)||
     (document.calc.rate.value == null || document.calc.rate.value.length == 0)||
     (document.calc.years.value == null || document.calc.years.value.length == 0))
 { document.calc.qualify.value = "Incomplete data";
 }
 else
 {
	var income = document.calc.grossincome.value;	
	var expenses = document.calc.allexpenses.value;
	var disposeincome = income - expenses;
	var nettincome = income *.1;
	
		var useincome;
	if (disposeincome >= nettincome) {
		useincome = nettincome;
}
else
{
		useincome = disposeincome;
	}

	var int = document.calc.rate.value / 1;
	var term = document.calc.years.value * 1;

    var qualify = (useincome*1)/(int/(1-(Math.pow((int+1),-(term)))));;
    document.calc.qualify.value  = 'R ' + rounding(Math.round(qualify*100)/100);
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
