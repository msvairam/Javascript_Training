

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise Resolved Value!!');
    },20000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise Resolved Value!!');
    },40000)
})


//Always return a promise
// New way of promise then
async function HandlePromise() {
    console.log('Hello World');

    const data = await p1;
    console.log('New Way:'+data);
    console.log('New Way:'+'Vanakkam Javascript');

    const data2 = await p2;
    console.log('New Way2:'+data2  );
    console.log('New Way2:'+'Vanakkam Javascript');
}

HandlePromise(); 
/*
// Old way of promise then
function getPromiseCall() {
    // Js engine will not wait for promise to be resolved
    p.then((data) => {
        console.log('Old Way'+data);
    })
    console.log('Old Way'+'Vanakkam Javascript');
}


getPromiseCall();*/