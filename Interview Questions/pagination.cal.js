function generatePagniation(totalPages, currentPage) {
    let maxPages = Math.min(totalPages, currentPage + 2);
    let minPages = Math.max(1, currentPage - 2);

    return Array.from({length: (maxPages - minPages) + 1}).map((_,i) => minPages + i);
}

console.log(generatePagniation(10, 5));