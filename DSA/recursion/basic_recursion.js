function recursion(n) {
    if(n === 0) return;
    console.log(n);
    recursion(n -1);
}

recursion(5);