function prime(n){
    if(n<2){
        return true
    }
    for(let i = 2;i<Math.sqrt(n);i++){
        if(n%i==0){
            return false
        }
    }
    return true
}
console.log(prime(5));
// time complexity=O(sqrt(n))