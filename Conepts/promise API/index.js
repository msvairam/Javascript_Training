const p1 =  new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('p1 success');
    },3000)   
})

const p2 =  new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('p2 success');
        //reject('p2 reject');
    }, 2001)   
})

const p3 =  new Promise((resolve, reject) => {
    setTimeout(() => {
       // resolve('p3 success');
        reject('p3 fail');
    },2000)   
})

/*
// Fail Fast or wait for success for all promise
 Promise.all([p1, p2, p3]).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});
// Wait for all promise shettled , whether success or fail.
Promise.allSettled([p1, p2, p3]).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});

// First shettled promise, where success or fail. 
Promise.race([p1, p2, p3]).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err);
});*/
//Find first shettled success/resolve/fullfilled promise
Promise.any([p1, p2, p3]).then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e);
})


