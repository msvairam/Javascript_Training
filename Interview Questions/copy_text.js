let content = document.getElementById('content');
let button = document.getElementById('copy_button');

button.addEventListener('click', () => {
    navigator.clipboard.writeText(content.textContent).then((data) => {
        console.log('content copied successfully');
    })
    .catch((err) => {
        console.log('Error', err);
    })
});