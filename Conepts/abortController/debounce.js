function debounceOld(searchFn, delay) {
    let timeout;
    return (val) => {
        clearTimeout(timeout);
       timeout = setTimeout(() => {
            searchFn(val);
        }, delay);
    }
}
    
function print(val) {
    console.log(val)
}

function debounce(val, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(val);
        }, delay);
    }
    )
}

function debounce(searchFn, delay) {
    let timeout;
    return (val) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            searchFn(val);
        }, delay);
    }
}




const optimiziedFn = debounce(print, 1000);

optimiziedFn('i');
optimiziedFn('ip');
optimiziedFn('iph');
