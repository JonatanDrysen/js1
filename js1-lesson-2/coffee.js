const pricePerCup = 12;
const cupsBought = 64;
const discountSum = 1000;

let totalAmountSpent = pricePerCup * cupsBought;
let cupsUntilDiscount = Math.ceil((discountSum - totalAmountSpent) / pricePerCup);

if(totalAmountSpent >= discountSum){
    console.log(`You get a discount because you bought ${cupsBought} cups!`)
} else if(totalAmountSpent < discountSum){
    console.log(`You need to buy ${cupsUntilDiscount} more cups to get a discount`)
}