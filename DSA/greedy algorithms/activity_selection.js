/**
 * Problem: Given activities with start & end times,

    select maximum number of non-overlapping activities.
 */
function activitySelection(activities) {
    activities.sort((a, b) =>  a.end - b.end);

    const selection = [activities[0]];
    let lastEnd = activities[0].end;

    for (let i =0; i < activities.length; i++) {
        if(activities[i].start > lastEnd) {
            selection.push(activities[i]);
            lastEnd = activities[i].end;
        }
    }

    return selection;
}

const activities = [
  { name: 'A', start: 0, end: 6 },
  { name: 'B', start: 1, end: 4 },
  { name: 'C', start: 3, end: 5 },
  { name: 'D', start: 5, end: 7 },
  { name: 'E', start: 5, end: 9 },
  { name: 'F', start: 8, end: 9 },
];

console.log(activitySelection(activities));