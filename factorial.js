function factorial(n){
    let fact=1
    for(let i = 2 ; i <=n;i++){
        fact=fact*i;
    }
    return fact
}
console.log(factorial(5));
//time complexity = O(n)
//this is worst case time complexity which is linear 