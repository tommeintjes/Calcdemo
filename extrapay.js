// JavaScript Document

function checnum(as)
{
	var ee = as.value;
	if(isNaN(ee))
	{
		ee = ee.substring(0,(ee.length-1));
		as.value = ee;
	}		
}
function loan()
{
	var a = document.extrapay.aa.value;
	var b = document.extrapay.bb.value;
	var c = document.extrapay.cc.value;
	var d = document.extrapay.dd.value;
	
	var n = c * 1;
	var r = b/(1*100);
	var p = (a * r *Math.pow((1+r),n))/(Math.pow((1+r),n)-1);
	var prin = Math.round(p*100)/100;
	document.extrapay.r1.value = 'R ' + rounding(prin);
	
	var nmp = Math.round((+d + prin)*100)/100;
	document.extrapay.r2.value = 'R ' + rounding(nmp);

//  nper_value = Math.log((-fv * rate + pmt)/(pmt + rate * pv))/ Math.log(1 + rate);

	var nper = Math.log((r + nmp)/(nmp - r * a))/Math.log(1 + r);
	nper = Math.round(nper);
	document.extrapay.r3.value = (nper);
	
	var totalpaid = prin * n;
	var newpaid = nmp * nper;
//	document.first.r4.value = totalpaid - newpaid;
	document.extrapay.r4.value = 'R ' + rounding(Math.round((totalpaid - newpaid)*100)/100);
	
	
	for(var i=0;i<n;i++)
	{
		var z = a * r * 1;
		var q = Math.round(z*100)/100;
		var t = p - z;
		var w = Math.round(t*100)/100;
		var e = a-t;
		var l = Math.round(e*100)/100;
		a=e;
          }
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
