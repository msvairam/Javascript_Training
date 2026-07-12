function garbageCollector(graph, roots) {
    const result = {}
    let end = roots[0];
    for (let [key, value] of Object.entries(graph)) {
        if (key === end) {
            result[key] = value;
            end = value[0] ?? '';
        }
        if (!end) break;
    }
    return result;
}

console.log(garbageCollector({A: ['B'], B: ['C'], C: [], D:[]}, ['A']));