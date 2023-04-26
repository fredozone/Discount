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
    console.log("refillsTotal : " + refillsTotal);
    console.log("promotionTotal : " + promotionTotal);
    console.log("couponTotal : " + couponTotal);
    console.log("totalDiscountTotal : " + totalDiscountTotal);
    var total = refillsTotal - totalDiscountTotal;
    console.log("GrandTotal : " + total);

    // TIMMY TEST
    const refillsTotalT = refills(timmy["refills"], timmy["pricePerRefill"]);
    const promotionTotalT = promotion(refillsTotalT, timmy["subscription"]);
    const couponTotalT = coupon(refillsTotalT, timmy["coupon"]);
    const totalDiscountTotalT = totalDiscount(promotionTotalT, couponTotalT);
    console.log("refillsTotal : " + refillsTotalT);
    console.log("promotionTotal : " + promotionTotalT);
    console.log("couponTotal : " + couponTotalT);
    console.log("totalDiscountTotal : " + totalDiscountTotalT);
    var total = refillsTotalT - totalDiscountTotalT;
    console.log("GrandTotal : " + total);

    // SARAH TEST
    const refillsTotalS = refills(sarah["refills"], sarah["pricePerRefill"]);
    const promotionTotalS = promotion(refillsTotalS, sarah["subscription"]);
    const couponTotalS = coupon(refillsTotalS, sarah["coupon"]);
    const totalDiscountTotalS = totalDiscount(promotionTotalS, couponTotalS);
    console.log("refillsTotal : " + refillsTotalS);
    console.log("promotionTotal : " + promotionTotalS);
    console.log("couponTotal : " + couponTotalS);
    console.log("totalDiscountTotal : " + totalDiscountTotalS);
    var total = refillsTotalS - totalDiscountTotalS;
    console.log("GrandTotal : " + total);

    // PAGE SOLUTION

    var ClientName = document.getElementById("name").value; 
    var Prescription = document.getElementById("prescription").value;
    var Price = document.getElementById("price").value;
    var NumberRefills = document.getElementById("refills").value;
    var Subscription = document.getElementById("subscriptions");
    var Coupon = document.getElementById("coupon");
    Subscription.checked ? Subscription = true : Subscription = false;
    Coupon.checked ? Coupon = true : Coupon = false;

    const refillsTotalP = refills(NumberRefills, Price);
    const promotionTotalP = promotion(refillsTotalP, Subscription);
    const couponTotalP = coupon(refillsTotalP, Coupon);
    const totalDiscountTotalP = totalDiscount(promotionTotalP, couponTotalP);
    var total = refillsTotalP - totalDiscountTotalP;
    document.getElementById("prescriptionName").innerHTML = Prescription;
    document.getElementById("NRefills").innerHTML = NumberRefills;
    document.getElementById("RefillCost").innerHTML = "$"+Price;
    document.getElementById("TotalRrefills").innerHTML = "$"+refillsTotalP;
    if(Subscription === true){
        document.getElementById("subscriptionShow").innerHTML = "Subscription Discount";
        document.getElementById("subscriptionTotal").innerHTML = "-$"+promotionTotalP;
    }

    if(Coupon === true){
        document.getElementById("couponShow").innerHTML = "Coupon Discount";
        document.getElementById("couponTotal").innerHTML = "-$"+couponTotalP;
    }
    document.getElementById("paidTotal").innerHTML = "$"+total;
    if(Subscription == true || Coupon == true){
        document.getElementById("clientName").innerHTML = ClientName+"'s saving today";
        document.getElementById("grandSavingTotal").innerHTML = "$"+totalDiscountTotalP;
    }

    // document.getElementById("showReceipt").classList.remove("displayreceipt");
}



  
