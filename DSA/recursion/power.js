function power(base, expose) {
    // Base Case
    if (expose == 0) return 1;
    // Recursion Case
    return base * power(expose - 1);
}

console.log(power(2, 8)); // 256