function summation(n){
    let sum=0;//1
    for(let i = 0 ; i <=n ; i++){//worst case time complexity is n+2 so 4+2
        sum+=i;//4
    }
    return sum;//1
}
let num=4;
console.log(summation(num))