let controller;

async function fetchFun() {
    try {
        if (controller) {
            controller.abort();
        }

        controller = new AbortController();

        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", { signal :  controller.signal });
        const todo = await response.json();
        console.log(todo);
    } catch(e) {
        if (e.name === 'AbortError') {
            console.log(e.message);
        }
    }
}
fetchFun();
fetchFun();
fetchFun();
controller= null;
fetchFun();
fetchFun();

/*const controller =  new AbortController();
const { signal } =  controller;

async function fetchFun() {
    try {
        const response =  await fetch("https://jsonplaceholder.typicode.com/todos/1", {signal: signal});
        const todo =  await response.json();
        console.log(todo);
    } catch(e) {
        console.log(e);
    }
}

fetchFun(); 
controller.abort();
*/