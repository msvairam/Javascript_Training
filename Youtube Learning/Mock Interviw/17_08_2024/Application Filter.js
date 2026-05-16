let items = [
    {color: 'red', type: 'tv', age :18},
    {color: 'silver', type: 'phone', age: 20},
    {color: 'blue', type: 'book', age: 17}
];

const excludes  = [
    { k: 'color', v: 'silver'},
    { k: 'color', v: 'red'},
    {k: 'type', v: 'tv'}
];

function excludesItems2(items, excludes) {
   const excludesMap = new Map();
   excludes.forEach((val) => {
        if(!excludesMap.has(val.k)) excludesMap.set(val.k, new Set());
        excludesMap.get(val.k).add(val.v);
   });
   return items.filter((item) => {
    return Object.entries(item).filter(([key, val]) => {
            if(excludesMap.has(key)) {
                if(excludesMap.get(key).has(val)) {
                   return false
                }
            }
            return true;
        }).length ==  Object.values(item).length;
   });
}

function excludesItems(items, excludes) {
    excludes.forEach(element => {
        items  =  items.filter((val) =>  val[element.k] != element.v);
    });
    return items;
}

console.log(excludesItems2(items, excludes));