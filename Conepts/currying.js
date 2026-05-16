function sum(a) {
    return (b) => {
        return (c) => {
            return a+b+c;
        }
    }
}

console.log(sum(1)(2)(3));


const logger = (time) => (type) => (message) => `At time ${time} an event of type ${type} occurrened with full details at ${message}`;

const eventsNow = logger('now');
const errorEvent =  eventsNow('error');
console.log(errorEvent('cannot set properties of null'));