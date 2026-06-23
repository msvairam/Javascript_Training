/*
Problem: Given items with weight & value,

maximize value in knapsack of capacity W.

(You CAN take fractions of items!)*/
function fractionalKnapsack(items, capacity) {
  // Greedy: sort by value/weight ratio descending
  items.sort((a, b) => {
    return b.value / b.weight - a.value / a.weight;
  });
  console.log(items);
  const result = [];
  let remaining = capacity;
  let totalValue = 0;

  for (let item of items) {
    if (remaining > item.weight) {
      // take whole item
      result.push({ ...item, fraction: 1 });
      totalValue += item.value;
      remaining -= item.weight;
    } else {
      // take fraction of item
      const fraction = remaining / item.weight;
      totalValue += item.value * fraction;
      result.push({ ...item, fraction });
      remaining = 0;
    }
  }
  return { totalValue, result };
}

const items = [
  { name: "A", weight: 20, value: 100 },
  { name: "B", weight: 10, value: 60 },
  { name: "C", weight: 50, value: 100 },
  { name: "D", weight: 50, value: 200 },
];

console.log(fractionalKnapsack(items, 90));
