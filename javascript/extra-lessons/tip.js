const prices = [3000, 27500, 100000];


const tip =()=>{

    for(let i = 0; i < prices.length; i++){
        if(5000 < prices[i] < 30000){
    
        }
    }

}

const totalPrice = (niit)=>{
    let sum = 0;
    for(let i = 0; i < prices.length; i++){
        sum +=niit[i];
    }
    console.log(sum);
    return sum;
}
totalPrice(prices);

// const averagePrice = (total) => {
//     let result = [];
//     for(let i = 0; i <prices.length; i++){
//         result += total[i];
//     }
//     let average = result / total.
// }

const averagePrice = (total) => {
    return totalPrice(total) / total.length;
}
averagePrice(prices);
console.log(averagePrice(prices));