// JavaScript Document

//Initialize Variables

var transFeeN   = 0;
var vatN        = 0;
var deedOfficeN = 0;
var transDutyN  = 0;
var lodgeN      = 0;
var postageN    = 0;
var ratesN      = 0;
var proRataN    = 0;
var excluUseN   = 0;
var ficaN       = 0;
var electronN   = 0;
var totalN      = 0;

var transFeeL   = 0;
var vatL        = 0;
var deedOfficeL = 0;
var transDutyL  = 0;
var postageL    = 0;
var ratesL      = 0;
var proRataL    = 0;
var excluUseL   = 0;
var electronL   = 0;
var totalL      = 0;

var totalN1     = 0;
var totalL1     = 0;
var totalN2     = 0;
var totalL2     = 0;
var totalN3     = 0;
var totalL3     = 0;

var fees        = 0;
var vat         = 0;
var deeds       = 0;
var insCert     = 0;
var bcf         = 0;
var total2      = 0;
var bcMonth     = 0;

var useExclu    = 1;
var convOrSect  = "conventional";


//Do calculation

function doFullOnCalc() {
    purchaseP   = document.transform.purchaseP.value;
    bondAmount  = document.transform.bondAmount.value;
    useExclu    = document.transform.exclu.value;
    (document.transform.titletrans[1].checked) ? convOrSect = "sectional" : convOrSect  = "conventional";
   
    if(isNaN(purchaseP))    purchaseP   = "0";
    if(isNaN(bondAmount))   bondAmount  = "0";
    //alert('purchasep: '+purchaseP + 'bondAmount: '+bondAmount);
    if (purchaseP == 0 && bondAmount == 0) {
       alert("Please enter a number greater than 0");
       return 0;
    } else if ( purchaseP != 0){
        calcTrans(purchaseP,bondAmount);
    } else if ( bondAmount!= 0) {
        calcBond(bondAmount);
    } else {
        calcTrans(purchaseP,bondAmount);
    }
}

//The below function calculates the  deeds amount for transfer and bond cost calculator - do not confuse with the deeds office search fee under bond costs

function getDeedsAmt(totamt) {
    deedsamt = 0;

    if (totamt <= 100000)                                   {   deedsamt = 30.00;}
    else if ((totamt > 100000)  && (totamt <= 150000))      {   deedsamt = 70.00; }
    else if ((totamt > 150000)  && (totamt <= 300000))      {   deedsamt = 400; }
    else if ((totamt > 300000)  && (totamt <= 600000))      {   deedsamt = 500; }
    else if ((totamt > 600000)  && (totamt <= 700000))      {   deedsamt = 700; }
    else if ((totamt > 700000)  && (totamt <= 800000))      {   deedsamt = 800; }
    else if ((totamt > 800000) && (totamt <= 1000000))      {   deedsamt = 900; }
    else if ((totamt > 1000000) && (totamt <= 2000000))     {   deedsamt = 1100; }
    else if ((totamt > 2000000) && (totamt <= 4000000))     {   deedsamt = 1500; }
    else if ((totamt > 4000000) && (totamt <= 6000000))     {   deedsamt = 1800;}
    else if ((totamt > 6000000) && (totamt <= 10000000))    {   deedsamt = 2100;}
    else if ((totamt > 1000000) && (totamt <= 15000000))    {   deedsamt = 2500;}
    else if ((totamt > 1500000) && (totamt <= 20000000))    {   deedsamt = 3000;}
    else if (totamt  > 2000000)                             {   deedsamt = 4000;}


    return deedsamt;
}


// Calculate Transfer Costs

function calcTrans(purchaseP,bondAmount){
    //Deeds Office Levy
    deedOfficeN = 0;
    deeds       = 0;

    electronic_fee  = 100.00;
    deedOfficeN     = getDeedsAmt(purchaseP);

    // Transfer Duty
    // Property Value -- Rates of tax
    // R0 - R600 000 -- 0%
    // R600 001 - R1 000 000 -- (3% on the value above R600 000)
    // R1 000 001 - R1 500 000 -- R12 000 plus (5% on the value above R600 000)
    // R1 500 001 and above -- R37 000 plus (8% on the value over R1 500 000)

    if (purchaseP <= 600000) {
       transDutyN = 0;
    } else if ( (purchaseP > 600000)  && (purchaseP <=1000000)) {
       transDutyN = (purchaseP - 600000) * 0.03;
    } else if ( purchaseP > 1000000 && purchaseP <= 1500000) {
       transDutyN = 12000 + ((purchaseP - 1000000) * 0.03);
    } else if ( purchaseP > 1500000){
       transDutyN = 37000 + ((purchaseP - 1500000) * 0.03);
    }


    var transfee = 0;
    var fee_increment = 0;
    var base_fee = 0;
    var closest_value = 0;
    var diff = 0;
    var increment = 0;

    if (purchaseP <= 80000)                                      {   transfee = 3200;     }
    else if ((purchaseP >80000)   && (purchaseP <= 90000))       {    transfee = 3740;    }
    else if ((purchaseP >90000)   && (purchaseP <= 100000))      {    transfee = 4015;    }
    else if ((purchaseP >100000)   && (purchaseP <= 125000))     {    transfee = 4125;    }
    else if ((purchaseP >125000)   && (purchaseP <= 150000))     {    transfee = 4290;    }

    else if ((purchaseP >150000)   && (purchaseP <= 175000))     {    transfee = 4620;    }
    else if ((purchaseP >175000)   && (purchaseP <= 200000))     {    transfee = 4840;    }
    else if ((purchaseP >200000)   && (purchaseP <= 250000))     {    transfee = 5280;    }
    else if ((purchaseP >250000)   && (purchaseP <= 300000))     {    transfee = 6050;    }

    else if ((purchaseP >300000)   && (purchaseP <= 350000))     {    transfee = 6490;    }
    else if ((purchaseP >350000)   && (purchaseP <= 400000))     {    transfee = 7040;    }
    else if ((purchaseP >400000)   && (purchaseP <= 450000))     {    transfee = 7590;    }
    else if ((purchaseP >450000)   && (purchaseP <= 500000))     {    transfee = 8250;    }

    else if(purchaseP > 500000 && purchaseP <= 1000000){
        fee_increment = 1100;
        base_fee = 8250;
        closest_value = 0;

        if (purchaseP > 900000 && purchaseP <= 1000000) {
            // We need anything above R950k to stay in the R900k bracket
            closest_value = 900000;
        } else {
            closest_value = ((Math.round(purchaseP/10000) * 10000));
        }

        diff = 0;
        increment = 1;

        if (closest_value - 500000 >= 100000) {
            diff = closest_value - 500000;
            increment = Math.floor(diff / 100000) + 1;
        }

        transfee = (increment * fee_increment) + base_fee;

    }  else if(purchaseP > 1000000 && purchaseP <= 5000000){
        fee_increment = 550;
        base_fee = 13750;
        closest_value = 0;

        closest_value = ((Math.round(purchaseP/10000) * 10000));

        diff = 0;
        increment = 0;

        if (closest_value - 1000000 >= 100000) {
            diff = closest_value - 1000000;
            increment = Math.floor(diff / 100000);
        }

        transfee = (increment * fee_increment) + base_fee;

    }  else {

        fee_increment = 275;
        base_fee = 35750;
        closest_value = 0;

        closest_value = ((Math.round(purchaseP/10000) * 10000));

        diff = 0;
        increment = 0;

        if (closest_value - 5000000 >= 100000) {
            diff = closest_value - 5000000;
            increment = Math.floor(diff / 100000);
        }

        transfee = (increment * fee_increment) + base_fee;

    }

    transFeeN=transfee;

    vatN = eval(transFeeN * 0.14);

    lodgeN    = 100;
    postageN    = 100;
    electronN   = 100.00;
    ficaN = 100;
	
    if (convOrSect=="conventional"){
        ratesN      = 100;
        excluUseN   = 0;
        proRataN    = 0;
        office_search = 100.00;
    } else if ( convOrSect=="sectional"){
        ratesN      = 100;
        excluUseN   = (100 + ( 100 * 0.14)) * useExclu;
        proRataN    = 100;
        office_search = 100;
    }

    totalN1 = transFeeN + vatN + deedOfficeN;
    totalN2 = totalN1 + transDutyN;
    totalN3 = totalN2 + (lodgeN + postageN + ratesN + proRataN + excluUseN + ficaN + office_search+electronic_fee) ;

    //Return values to html

    //alert('trans: '+formatCalc(transFeeN));
    document.getElementById("transFeeN").innerHTML      = formatCalc(transFeeN);

    document.getElementById('vatN').innerHTML           = formatCalc(vatN);

    document.getElementById('deedOfficeN').innerHTML    = formatCalc(deedOfficeN);

    document.getElementById('totalN1').innerHTML        = formatCalc(totalN1);

    document.getElementById('transDutyN').innerHTML     = formatCalc(transDutyN);

    document.getElementById('totalN2').innerHTML        = formatCalc(totalN2);

    document.getElementById('lodgeN').innerHTML         = formatCalc(lodgeN);

    document.getElementById('postageN').innerHTML       = formatCalc(postageN);

    document.getElementById('ratesN').innerHTML         = formatCalc(ratesN);

    document.getElementById('prorataN').innerHTML       = formatCalc(proRataN);
	
    document.getElementById('ficaN').innerHTML          = formatCalc(ficaN);

    document.getElementById('excluN').innerHTML         = formatCalc(excluUseN);

    document.getElementById('deedOfficeSearchN').innerHTML  = formatCalc(office_search);

    document.getElementById('electroDocN').innerHTML    = formatCalc(electronic_fee);

    document.getElementById('totalN3').innerHTML        = formatCalc(totalN3);

    // Afterwards, calculate Bond Costs
    calcBond(bondAmount);
}

function calcBond(bondAmount) {
    var x = 0;

    if (bondAmount>0) {
        var fees = 0;
        var fees1 = 100;
        var fees2 = 100;
        var fees3 = 100;
        var postage_petties_bond = 100;
		var fica2 = 100;
        var docfee = 100.00;

        /**
        * The new fees.
        * Modified by: Moe 
        * Date: 26-03-2013
        */
        if (bondAmount <= 100000)                                 { fees = 3000; }
        else if (bondAmount > 100000 && bondAmount <= 125000 )    { fees = 3120; }
        else if (bondAmount > 125000 && bondAmount <= 150000 )    { fees = 3240; }
        else if (bondAmount > 150000 && bondAmount <= 175000 )    { fees = 3480; }
        else if (bondAmount > 175000 && bondAmount <= 200000 )    { fees = 3600; }
        else if (bondAmount > 200000 && bondAmount <= 250000 )    { fees = 3960; }
        else if (bondAmount > 250000 && bondAmount <= 300000 )    { fees = 4440; }
        else if (bondAmount > 300000 && bondAmount <= 350000 )    { fees = 4920; }
        else if (bondAmount > 350000 && bondAmount <= 400000 )    { fees = 5520; }
        else if (bondAmount > 400000 && bondAmount <= 450000 )    { fees = 6000; }
        else if (bondAmount > 450000 && bondAmount <= 500000 )    { fees = 6480; }
        else if (bondAmount > 500000 && bondAmount <= 600000 )    { fees = 7440; }
        else if (bondAmount > 600000 && bondAmount <= 700000 )    { fees = 8400; }
        else if (bondAmount > 700000 && bondAmount <= 800000 )    { fees = 9360; }
        else if (bondAmount > 800000 && bondAmount <= 900000 )    { fees = 10320; }
        else if (bondAmount > 900000 && bondAmount <= 1000000 )   { fees = 11280; }

        else if (bondAmount > 1000000) {
            var fee_increment = 100;
            var base_fee = 11280;

            if (bondAmount > 5000000) {
                fee_increment = 100;
                base_fee = 32400;
            }

            /*

            Step 1: round to nearest R 100,000

            Step 2:  First, we need to find out how many increments of 100000 the amount entered
                is greater that R1,000,000.

            Step 3: fees = (increments * <fee_increment>) + <base_fee>

            */

            if (bondAmount > 5000000) {
                increment = ((Math.round((bondAmount - 5000000) / 100000) * 100000) / 100000);
            }  else {
                increment = ((Math.round(bondAmount/100000) * 100000) / 100000) - 10;
            }

            // Calculate fees
            fees = (increment * fee_increment) + base_fee;


        }

        // Deeds Office Fees
        if (bondAmount <= 150000) {
            deeds = 100;
        } else if(bondAmount > 150000 && bondAmount <= 300000) {
            deeds = 100;
        } else if(bondAmount > 300000 && bondAmount <= 500000) {
            deeds = 100;
        } else if(bondAmount > 500000 && bondAmount <= 1000000) {
            deeds = 100;
        } else if(bondAmount > 1000000 && bondAmount <= 2000000) {
            deeds = 100;
        } else if(bondAmount > 2000000 && bondAmount <= 5000000) {
            deeds = 100;
        } else if(bondAmount > 5000000) {
            deeds = 100;
        }

        //Check if calculation is sectional 
        (convOrSect=="sectional") ? insCert = 500 : insCert = 0;

        if(bondAmount) {
            vat = eval(fees * 0.14);
            stamp = eval(bondAmount * 0.002);
            bcf   = 100.00;

            (convOrSect=="sectional") ?  insCert=100 : insCert=0;

            total2 = eval(fees + vat + deeds + insCert + postage_petties_bond + bcf + fica2 + docfee).toFixed(2);

        } else {
            total2 = 0.00;
        }
    } else {
        fees = 0;
        vat = 0;
        deeds = 0;
        postage_petties_bond = 0;
        insCert = 0;
        bcf = 0;
		fica2 = 0;
        docfee = 0;
        total2 = 0;
    }

    //Return Values to HTML

    document.getElementById('fees').innerHTML             = formatCalc(fees);
    document.getElementById('vat').innerHTML              = formatCalc(vat);
    document.getElementById('deeds').innerHTML            = formatCalc(deeds);
    document.getElementById('postagePettiesBC').innerHTML = formatCalc(postage_petties_bond);
    document.getElementById('insCert').innerHTML          = formatCalc(insCert);
    document.getElementById('bcf').innerHTML              = formatCalc(bcf);
    document.getElementById('fica2').innerHTML            = formatCalc(fica2);
    document.getElementById('docfee').innerHTML           = formatCalc(docfee);
    document.getElementById('tot2').innerHTML             = formatCalc(total2);
}

function formatCalc(num) {
    
    num = num.toString().replace(/\$|\,/g,'');
    if(isNaN(num))  num = "0";
    
    sign    = (num == (num = Math.abs(num)));
    num     = Math.floor(num*100+0.50000000001);
    cents   = num % 100;
    num     = Math.floor(num / 100).toString();
    
    if(cents<10)    cents = "0" + cents;
    
    for (var i = 0; i < Math.floor((num.length-( 1 + i)) / 3); i++)
        num = num.substring(0, num.length - ( 4*i + 3 )) + ',' + num.substring(num.length - ( 4*i + 3));
    return (((sign)?'':'-') + '' + num + '.' + cents);
}