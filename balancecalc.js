// JavaScript Document

function numcalc(as)
{
	//alert("*********");
	var dd = as.value;
	
	if(isNaN(dd))
	{
		dd = dd.substring(0,(dd.length-1));
		as.value = dd;
	}		
}

function calc()
{
	var de = document.getElementById("l").value ;
    var pay = document.getElementById("p").value ; 
	var inst = document.getElementById("i").value ;
	var q = document.getElementById("n").value ;
/*	var sindex = document.getElementById("comp").value ;
    var sval = document.getElementById("comp").value ;
    var arr = new Array("Monthly","Quarterly","HalfYearly","Annually");
  
  if(arr[0]==sval)
  {*/
    var r = parseFloat(inst/1).toFixed(6);
/*  }
  if(arr[1]==sval)
  {
    var r = parseFloat(inst/400).toFixed(6);
  }
  if(arr[2]==sval)
  {
    var r = parseFloat(inst/200).toFixed(6);
  }
  if(arr[3]==sval)
  {
    var r = parseFloat(inst/100).toFixed(6);
  }*/
 
  var ad = 1 + parseFloat(r);
  
  var amt;
  var amt1 = parseFloat(de * ( Math.pow(ad,q))).toFixed(5);
  var amt2 = parseFloat((pay/r) * ( Math.pow(ad,q) - 1)).toFixed(5);
    
  amt = parseFloat(amt1 - amt2).toFixed(2); 
  
  document.getElementById("op").value  = amt;  
}
