//the porpoise of this scrip is to calculate the tip amount based on the total bill amount and the service quality
//the tip amount is calculated as a percentage of the total bill amount
//the percentage is determined by the service quality
//the service quality is determined by the user input
//the tip amount is then displayed to the user

//define the variables
let totalBillAmount;
let serviceQuality;
let tipAmount;
let tipPercentage;
let grandTotal;

//create a function to check verify for service ammount between 5.00 and 500.00
function checkBillAmount(billAmount){
    while (billAmount >= 5 && billAmount <= 500){
        return true;
    }
    alert("The bill amount is too low. Please enter a bill amount between $5.00 and $500.00");
    return false;
}

//promt the user to enter the total bill amount
totalBillAmount = parseFloat(prompt("Enter the total bill amount: "));
//validate the total bill amount
while(!checkBillAmount(totalBillAmount)){
    totalBillAmount = parseFloat(prompt("Enter the total bill amount: "));
}

//array for service quality
let serviceQualityArray = ["poor", "ok", "great"];


//prompt the user to enter the service quality
serviceQuality = parseFloat(prompt("Enter the service quality (1 for poor 10%, 2 for Ok service 15%, 3 for great 20%): "));
//validate the service quality
while(!checkServiceQuality(serviceQuality)){
    serviceQuality = parseFloat(prompt("Enter the service quality (1 for poor 10%, 2 for Ok service 15%, 3 for great 20%): "));
}

//create a function to check the service quality
function checkServiceQuality(serviceQuality){
    while (serviceQuality >= 1 && serviceQuality <= 3){
        return true;
    }
    alert("The service quality is invalid. Please enter a number between 1 and 3");
    return false;
}

//create a function to calculate the tip amount
function calculateTipAmount(totalBillAmount, serviceQuality){
    if (serviceQuality == 1){
        tipPercentage = 0.10;
    } else if (serviceQuality == 2){
        tipPercentage = 0.15;
    } else {
        tipPercentage = 0.20;
    }
    return totalBillAmount * tipPercentage;
}

//calculate the tip amount
tipAmount = calculateTipAmount(totalBillAmount, serviceQuality);

//calculate the grand total

grandTotal = totalBillAmount + tipAmount;


//display the tip amount to the user
alert("Since the service you recieved was" + serviceQuality + "and your your bill was :$" + totalBillAmount + " you tipped :$" + tipAmount.toFixed(2) + "for a grand total of :$" + grandTotal.toFixed(2));



//end of script
