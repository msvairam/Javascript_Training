function computeAmount() {
    let total = 0;

    function thousand(val) {
        total +=  val * 1000;
        return this;
    }

    function lacs(val) {
        total += val * 100000;
        return this;
    }

    function crore(val) {
        total  +=  val * 10000000;
        return this;
    }
    function value() {
        return total;
    }

    return {
        thousand: thousand,
        lacs: lacs,
        crore: crore,
        value: value
    }
}

console.log(computeAmount().thousand(1).crore(1).lacs(1).lacs(10).thousand(10).value());
