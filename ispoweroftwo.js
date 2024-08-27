// function isPowerofTwo(n){
//     if(n<1){
//         return false
//     }
//     while(n>1){
//         if(n%2==1){
//             return false
//         }
//         n=n/2
//     }
//     return true
// }
// console.log(isPowerofTwo(2));
// console.log(isPowerofTwo(5));
// console.log(isPowerofTwo(1));
// time complexity=O(log(n))
function isPowerofTwoBitwise(n){
    if(n<1){
        return false
    }
    return ( n & (n-1))===0
}
console.log(isPowerofTwoBitwise(2));
console.log(isPowerofTwoBitwise(5));
console.log(isPowerofTwoBitwise(1));
//bigO=O(1)