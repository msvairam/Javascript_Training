/*
const fruits = document.getElementById('fruits');
const displayMessage = document.getElementById('displayMessage');


function debounceTrigger(ty, timer) {
    let inputTrigger = null;
    return function(value) {
        clearTimeout(inputTrigger);
        inputTrigger = setTimeout(() => {
            ty(value);
        },timer);
    }
}

function printMessage(value) {
    displayMessage.innerHTML = `<p> ${value} </p>`;
}

const debounceFn =  debounceTrigger(printMessage, 2000);

fruits.addEventListener('input', ($event) => {
    debounceFn($event.target.value);
});
*/
console.log("Throttle");

const throttle =  function(func, delay) {
    let lastCall = 0;
    return (...args) => {
        const now = new Date().getTime();
        if(now - lastCall >= delay) {
            lastCall = now;
            func.apply(this, args);
        }
    }
}



