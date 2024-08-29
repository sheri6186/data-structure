function recfib(n) {
    if (n < 2) {
    return n;
    }
    return recfib(n - 1) + recfib(n - 2);
    }
    
    function PrintRec(n, count = 0) {
    if (count <= n) {
    console.log(recfib(count));
    PrintRec(n, count + 1);
    }
    }
    
    PrintRec(7);
    //time complexity Big O= O(2^n)