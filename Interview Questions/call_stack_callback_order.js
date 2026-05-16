console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");

//////////////

console.log("Start");

setTimeout(() => {
    console.log("Timeout1");

    Promise.resolve().then(() => {
        console.log("Promise1");
    });

}, 0);

setTimeout(() => {
    console.log("Timeout2");

    Promise.resolve().then(() => {
        console.log("Promise2");
    });

}, 0);

console.log("End");

/////////////

console.log("1");

async function foo() {
    console.log("2");
    await Promise.resolve();
    console.log("3");
}

setTimeout(() => console.log("4"), 0);

foo();

Promise.resolve().then(() => console.log("5"));

console.log("6");

////////////

async function demo() {
    console.log("A");

    setTimeout(() => console.log("B"), 0);

    await Promise.resolve();

    console.log("C");
}

demo();

console.log("D");

////////////////

console.log("1");

setTimeout(() => {
    console.log("2");

    Promise.resolve().then(() => {
        console.log("3");
    });

}, 0);

Promise.resolve().then(() => {
    console.log("4");
});

console.log("5");

////////////////

setTimeout(() => console.log("Timeout1"), 0);

Promise.resolve().then(() => {
    console.log("Promise1");
});

setTimeout(() => {
    console.log("Timeout2");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise2");
});

//////////////////

console.log("Start");

setTimeout(() => {
    console.log("Timeout");

    Promise.resolve().then(() => {
        console.log("Promise in Timeout");
    });
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

////////////////

async function test() {
    console.log("A");

    await Promise.resolve();

    console.log("B");
}

console.log("C");

test();

console.log("D");

////////////

console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");
