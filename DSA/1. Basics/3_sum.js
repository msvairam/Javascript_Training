function sum(...args) {
    if (args.length === 0) return 0;

    const sum = args.reduce((acc, curr) => {
        acc = acc + curr;
        return acc;
    }, 0);
    return sum;
}

//For the purpose of user debugging.
console.log(sum());

