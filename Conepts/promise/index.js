// 1. Promises are Eagar, no Lazy
/*
The executor function passed to new Promise() runs synchronously, immediately,
 not deferred. Only .then()/.catch() callbacks are deferred (as microtasks).
  This trips people up — a Promise doesn't mean "this code runs later," it means "this code runs now,
   but observing its result happens later."


console.log('start');
const promise = new Promise((resolve, reject) => {
    console.log('Executor run immediately');
    resolve(123);
})
console.log('end');

promise.then(console.log);

const data = await promise;
console.log(data);
*/
console.log("-----------2------------");
// 2. Microtask vs Macrotask ordering (already touched on this, but worth the full picture)

/*
Execution order rule: 
all synchronous code runs first → then all queued microtasks drain completely
 → then one macrotask runs → drain microtasks again → repeat.
  Microtasks always win against macrotasks, and the microtask queue is fully drained
   before a single macrotask gets a turn — this is the mechanism 
   behind the "Promise chains can block the UI" question from earlier.
   

console.log(1);

setTimeout(() => console.log(2), 0); // macrotask

Promise.resolve(3).then(console.log); // microtask

console.log(4);
*/
console.log("-------3-------");
// 3. async functions always return Promise - even without explicit one
/*
async function's return value is always coerced into a Promise. if you return 
a Promise from inside it. it's not a double-wrapped (Promise<Promise<number>).
It is flattens to Promise<number>, same as .then()'s auto flattening bahaviour.


async function getValue() {
    return 42; // Not a number, wrapped automatically
}

console.log(getValue()); // Promise<number>, not 42 directly
getValue().then(console.log); // 42

async function getValue2() {
    return Promise.resolve(Promise.resolve(47));
}

console.log(getValue2); // [ AsyncFunction: getValue2 ]
console.log(getValue2()); // Promise { <pending> }
getValue2().then(console.log);

console.log('-------4---------');

function getValue3() {

}
console.log(getValue3);
*/
// 4. throw inside async becomes a rejected Promise, not an uncaught exception
/*
Since async functions return Promises, a throw inside one doesn't propagate as a normal
synchronous exception up the call stack - it rejects the returned Promise, This means you
can't catch it with a pain try/catch around the call site unless you await it.


async function risky() {
    throw new Error('failed');
}

risky().catch(err => console.error('Error', err));

try {
    await risky(); // RIGTH - unwraps the rejection into a throwable synchronous looking error
} catch (e) {
    console.log("Error", e); // never catched
}

try {
    risky(); // WRONG - no await this doesn't throw synchronously, try/catch won't see it.
} catch (e) {
    console.log("Error", e); // never catched
}
    */

console.log("--------------5-------------------");
// 5. await only pauses the async function itself, not the whole program
/*
await yields control back to the caller - it doesn't block the JS engine/thread.
This is fundamental of async non-blocking property. and it's why slow()'s caller
(console.log('after')) keeps executing immediately rather than waiting.


async function slow() {
    console.log('slow start');
    await Promise.resolve(4).then(console.log);
    /*
    await new Promise((r) => setTimeout(r, 1000));
    await new Promise((r) => {
        console.log('inside promise');
        setTimeout(r, 1000)
    });
    *
    console.log('slow end');
}

console.log('before');
slow();
console.log('after');*/
console.log("-------------6--------------------");
// 6. Sequential await vs parallel - a very common performance bug
/*
async function fetch1() {
    return new Promise((resolve, reject) => { setTimeout(() => { resolve('fetch1')}, 1000)});
}

async function fetch2() {
     return new Promise((resolve, reject) => { setTimeout(() => { resolve('fetch2')}, 1000)});
}

async function fetch3() {
     return new Promise((resolve, reject) => { setTimeout(() => { resolve('fetch3')}, 1000)});
}
// Sequential — SLOW, each waits for the previous to finish (3 seconds total if each takes 1s)
async function sequential() {
const c1 = await fetch1();
console.log(c1);
const c2 = await fetch2();
console.log(c2);
const c3 = await fetch3();
console.log(c3);
}

await sequential();

// Parallel — FAST, all three fire simultaneously (1 second total)
async function paraller() {
const [c1, c2, c3] = await Promise.all([fetch1(), fetch2(), fetch3()])
return  [c1, c2, c3];
}
const result = await paraller();
console.log(result);
*/
console.log("----------------7----------------");
//7. Promise combinators - know all four, not just Promise.all
// // all — fails fast: rejects as soon as ANY promise rejects, discards others' results

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p1");
  });
});

const p2 = new Promise((resolve, reject) => {
  reject("p2");
});

const p3 = new Promise((resolve, reject) => {
  reject("p3");
});
/*
try {
  const [c1, c2, c3] = await Promise.all([p1, p2, p3]);

  console.log([c1, c2, c3]);
} catch (e) {
  console.log(e);
}
*/
/*
const [c1, c2, c3] = await Promise.allSettled([p1, p2, p3]);
console.log([c1, c2, c3]);
*/
/*
try { 
    const result = await Promise.race([p1, p2, p3]);
    console.log(result);
} catch(e) {
    console.log(e);
}*/
/*
const result = await Promise.any([p1, p2, p3]);
console.log(result);
*/
// 8. race for timeout — a genuinely useful real pattern:

function withTimeout(promise, ms) {
  const timeout =  new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject(new Error('reject'));
    }, ms);
  });

  return Promise.race([promise, timeout]);
}
try {
    const result =  await withTimeout(fetch('http://localhost:4200'), 1000);
    consle.log(result);
} catch(e) {
    console.log(e);
}

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection', reason);
})
