/*const cart = ['shoes', 'pants', 'shirts'];

createOrder(cart, (orderId) => {
    proceedToPayment(orderId);
});

function createOrder(cart, callback) {
    callback(1);
    callback(1);
}

function proceedToPayment(orderId) {
    console.log(orderId);
}

const promise =  createOrder(cart);

promise.than(function(orderId) {
    proceedToPayment(orderId);
})
*/

const  GITHUB_API  = 'https://api.github.com/users/hiteshchoudhary'

const user =  fetch(GITHUB_API);

console.log(user);

user.then(function(response) {
    console.log(response.json());
})



