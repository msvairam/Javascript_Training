5/* Minimum Platforms (Train Station)

Problem: Find minimum platforms needed

so no train waits.*/
function minPlatforms(arrivals, departures) {
    arrivals.sort((a, b) =>  a -b);
    departures.sort((a, b) => a - b);

    let i = 1;
    let j = 0;

    let platforms = 1;
    let maxPlatforms = 1;

    while(i < arrivals.length) {
        if(arrivals[i] <= departures[j]) {
            platforms++;
            i++;
        } else {
            platforms--;
            j++;
        }
        maxPlatforms = Math.max(maxPlatforms, platforms);
    }
    return maxPlatforms;
}

const arrivals   = [900, 940, 950, 1100, 1500, 1800];
const departures = [910, 1200, 1120, 1130, 1900, 2000];

console.log(minPlatforms(arrivals, departures));