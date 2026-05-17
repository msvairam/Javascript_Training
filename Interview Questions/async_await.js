async function apiCall() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const post = await response.json();

    console.log(post);
}

apiCall();