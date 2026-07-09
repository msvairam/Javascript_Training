function trapping_rain_water(arr) {
    let total = rmax = lmax = 0;
    let l = 0;
    let r = arr.length -1;

    while(l <= r) { 
        if(arr[l] <= arr[r]) {
            lmax = Math.max(lmax , arr[l]);
            total += lmax - arr[l];
            l++;
        } else {
            rmax = Math.max(rmax, arr[r]);
            total += rmax - arr[r];
            r--;
        }
    }
    return total;
}

console.log(trapping_rain_water([0,1,0,2,1,0,1,3,2,1,2,1]));

