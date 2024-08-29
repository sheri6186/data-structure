function linearSearch(arr,n){
    for (let i = 0 ; i < arr.length; i++){
        if (arr[ i ]===n){
           return i
        }
    }
    return -1
}
let age= [1,2,3,20,10];
let no=Number(20);
console.log(linearSearch(age,no))
//linear time complexity=O(n)