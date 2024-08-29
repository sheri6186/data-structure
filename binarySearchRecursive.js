function binarySearchRecursive(arr,target){
    return search(arr,target,0,arr.length-1)
}
function search(arr,target,leftIndex,rightIndex){
    if(leftIndex>rightIndex){
        return -1
    }
    let middleIndex=Math.floor((leftIndex+rightIndex)/2)
    if(target===arr[middleIndex]){
        return middleIndex
    }
    if(target<=leftIndex){
        return search(arr,target,leftIndex,middleIndex-1)
    }else{
        return search(arr,target,middleIndex+1,rightIndex)
    }

}
console.log(binarySearchRecursive([1,2,3,4,5],5))
console.log(binarySearchRecursive([10,20,30,34,35],300))
//time complexity bigO=O(logn)