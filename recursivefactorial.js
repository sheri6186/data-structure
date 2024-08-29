function recfact(n){
    if(n===0){
        return 1
    }
    return n*recfact(n-1)
}
console.log(recfact(0))
console.log(recfact(1))
console.log(recfact(5)) 
//time complexity big O= O(n) which is linear