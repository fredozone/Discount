const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}


function refills(refillsVar, pricePerRefillVar){
    return totalrefills = refillsVar * pricePerRefillVar;
}


function promotion(price ,subscriptionsVar){
    if(subscriptionsVar){
        return totalpromotion = (25 * price) / 100;
    }else{
        return totalpromotion = 0;
    }
}

function coupon(price, couponVar){
    if(couponVar){
        return totalcoupon = 10;
    }else{
        return totalcoupon = 0;
    }
    
}

function totalDiscount(promotion, coupon){
    return total = promotion + coupon;
}


function GrandTotal(){

    // ROKY TEST 
    const refillsTotal = refills(rocky["refills"], rocky["pricePerRefill"]);
    const promotionTotal = promotion(refillsTotal, rocky["subscription"]);
    const couponTotal = coupon(refillsTotal, rocky["coupon"]);
    const totalDiscountTotal = totalDiscount(promotionTotal, couponTotal);
    var totalR = refillsTotal - totalDiscountTotal;
    console.log("Rocky => grand total is  $" + totalR);

    // TIMMY TEST
    const refillsTotalT = refills(timmy["refills"], timmy["pricePerRefill"]);
    const promotionTotalT = promotion(refillsTotalT, timmy["subscription"]);
    const couponTotalT = coupon(refillsTotalT, timmy["coupon"]);
    const totalDiscountTotalT = totalDiscount(promotionTotalT, couponTotalT);
    var totalT = refillsTotalT - totalDiscountTotalT;
    console.log("Timmy => grand total is  $" + totalT);

    // SARAH TEST
    const refillsTotalS = refills(sarah["refills"], sarah["pricePerRefill"]);
    const promotionTotalS = promotion(refillsTotalS, sarah["subscription"]);
    const couponTotalS = coupon(refillsTotalS, sarah["coupon"]);
    const totalDiscountTotalS = totalDiscount(promotionTotalS, couponTotalS);
    var totalS = refillsTotalS - totalDiscountTotalS;
    console.log("Sarah => grand total is  $" + totalS);

    // PAGE SOLUTION
    //deleting the white space and conver my client name in lower case.
    var LowerClientName = document.getElementById("name").value.trim().toLowerCase(); 
    const ClientName = LowerClientName.charAt(0).toUpperCase()+ LowerClientName.slice(1);
    var LowerPrescription = document.getElementById("prescription").value.trim().toLowerCase();
    var Prescription = LowerPrescription.charAt(0).toUpperCase()+ LowerPrescription.slice(1);
    var Price = document.getElementById("price").value.trim();
    var NumberRefills = document.getElementById("refills").value.trim();
    var Subscription = document.getElementById("subscriptions");
    var Coupon = document.getElementById("coupon");
    Subscription.checked ? Subscription = true : Subscription = false;
    Coupon.checked ? Coupon = true : Coupon = false;

    

    //deleting the validation of the form 
    document.getElementById("name").classList.remove("validation");
    document.getElementById("prescription").classList.remove("validation");
    document.getElementById("price").classList.remove("validation");
    document.getElementById("refills").classList.remove("validation");

        //calling my functions
    const refillsTotalP = refills(NumberRefills, Price);
    const promotionTotalP = promotion(refillsTotalP, Subscription);
    const couponTotalP = coupon(refillsTotalP, Coupon);
    const totalDiscountTotalP = totalDiscount(promotionTotalP, couponTotalP);
    var total = refillsTotalP - totalDiscountTotalP;

    //showing the return for my function on my html
    document.getElementById("prescriptionName").innerHTML = Prescription;
    document.getElementById("NRefills").innerHTML = NumberRefills;
    document.getElementById("RefillCost").innerHTML = "$"+Price;
    document.getElementById("TotalRrefills").innerHTML = "$"+refillsTotalP.toFixed(2).replace(/\.00$/, '');;

    if(Subscription === true){
        document.getElementById("subscriptionShow").innerHTML = "Subscription Discount";
        document.getElementById("subscriptionTotal").innerHTML = "-$"+promotionTotalP.toFixed(2).replace(/\.00$/, '');;
    }else{
        document.getElementById("subscriptionShow").innerHTML = "";
        document.getElementById("subscriptionTotal").innerHTML = "";
    }

    if(Coupon === true){
        document.getElementById("couponShow").innerHTML = "Coupon Discount";
        document.getElementById("couponTotal").innerHTML = "-$"+couponTotalP.toFixed(2).replace(/\.00$/, '');;
    }else{
        document.getElementById("couponShow").innerHTML = "";
        document.getElementById("couponTotal").innerHTML = "";
    }

    document.getElementById("paidTotal").innerHTML = "$"+total.toFixed(2).replace(/\.00$/, '');;
    if(Subscription == true || Coupon == true){
        document.getElementById("clientName").innerHTML = ClientName + "'s saving today";
        document.getElementById("grandSavingTotal").innerHTML = "$"+totalDiscountTotalP.toFixed(2).replace(/\.00$/, '');;
    }else{
        document.getElementById("clientName").innerHTML = "";
        document.getElementById("grandSavingTotal").innerHTML = "";
    }

    document.getElementById("showReceipt").classList.remove("displayreceipt");
    
}


function validation(){

    var LowerClientName = document.getElementById("name").value.trim().toLowerCase(); 
    const ClientName = LowerClientName.charAt(0).toUpperCase()+ LowerClientName.slice(1)
    var Prescription = document.getElementById("prescription").value.trim();
    var Price = document.getElementById("price").value.trim();
    var NumberRefills = document.getElementById("refills").value.trim();

    if((ClientName == "" || ClientName == null) || (Prescription == "" || Prescription == null) || (Price == "" || Price == null) || (NumberRefills == "" || NumberRefills == null)){
        // Client name validation
        (ClientName == "" || ClientName == null) ? document.getElementById("name").classList.add("validation")
        : document.getElementById("name").classList.remove("validation");
        // Prescription name validation
        (Prescription == "" || Prescription == null) ? document.getElementById("prescription").classList.add("validation")
        : document.getElementById("prescription").classList.remove("validation");
        // Price name validation
        (Price == "" || Price == null) ? document.getElementById("price").classList.add("validation")
        : document.getElementById("price").classList.remove("validation");
        // NumberRefills name validation
        (NumberRefills == "" || NumberRefills == null) ? document.getElementById("refills").classList.add("validation")
        : document.getElementById("refills").classList.remove("validation");

        //if one of input is empty is going to add the class displayreceipt on showreceipt
        document.getElementById("showReceipt").classList.add("displayreceipt");
    }else{
        GrandTotal();
    }
}

//function that allows just number
function onlyNumberKey(evt) {       
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

//function that allow number and dot(.)
function isNumberKey(evt,id)
{
	try{
        var charCode = (evt.which) ? evt.which : event.keyCode;
  
        if(charCode==46){
            var txt=document.getElementById(id).value;
            if(!(txt.indexOf(".") > -1)){
	
                return true;
            }
        }
        if (charCode > 31 && (charCode < 48 || charCode > 57) )
            return false;

        return true;
	}catch(w){
		alert(w);
	}
}

//reset form and recipt 
function resetButton(){
    document.getElementById("name").classList.remove("validation");
    document.getElementById("prescription").classList.remove("validation");
    document.getElementById("price").classList.remove("validation");
    document.getElementById("refills").classList.remove("validation");

    document.getElementById("showReceipt").classList.add("displayreceipt");

    document.getElementById("myForm").reset();
}



  
