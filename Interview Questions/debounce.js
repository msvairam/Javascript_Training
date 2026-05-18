const inputBox  = document.getElementById('search_input');

const debounce = function(myFun, delay) {
    let timer = null;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            myFun(...args);
        }, delay);
    }
}

const fetchRequest = (event) => {
    const input = event.target.value;
    fetch(`https://api.github.com/users/${input}`)
    .then((response) => response.json())
    .then((data) => console.log(data));

}

inputBox.addEventListener('input', debounce(fetchRequest, 1000));

