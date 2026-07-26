// Moore's Voting Algorithm's
let arr = [7, 7, 5, 7, 5, 1, ,5, 7, 5, 5, 7, 7, 5, 5, 5, 5];
function majorityElement(arr) {
    let count = 1;
    let el = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(el === arr[i] || count === 0) {
            el = arr[i];
            count++;
        } else {
            count--;
        }
    }
    let count1 = 0;
    for(let i =0; i < arr.length; i++) {
        if(el === arr[i]) {
            count1++;
        }
        if(count1 >= Math.floor(arr.length/2)) {
            return el;
        }
    }
            return -1;
}
console.log(majorityElement(arr));

