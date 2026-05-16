const carts  =  ['shoes', 'pants', 'shorts'];

//create Order
//ProceedToPayment
//OrderSummary

//Consumer Part
const promise =  createOrder('shoe');

promise.then((orderId) => {
    console.log(orderId);
    return orderId;
}).catch(function(err) {
    console.error(err.message);
}).then((orderId) => {
    console.log(orderId);
    return orderId;
}).then((orderId) => {
    console.log(orderId);
    return orderId;
}).then((orderId) => {
    console.log(orderId);
    return proceedToPayment(orderId);
}).then((paymentInfo) => {
    console.log(paymentInfo);
    return orderSummary(paymentInfo);
}).then((orderSummary) => {
    console.log(orderSummary);
    return updateWallet(orderSummary);
}).then((money) => {
    console.log('money: '+money);
}).catch((err) => {
    console.error(err.message);
}).catch((err) => {
    console.error(err.message);
}).then(() => {
    console.log('it will call anything');
}).then(() => {
    console.log('it will call anything2');
})

//Producer Part
function createOrder(cart) {
    const pr =  new Promise((resolve, reject) => {
        if(!validateCart(cart)) {
            const err =  new Error('Invalid Cart Found');
            reject(err);
        } 
        let orderId = '12345';
        setTimeout(() => {
            resolve(orderId);
        })
        
    })

    return pr;
}

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        resolve("Order : "+orderId+' Payment successfully');
    })
}

function orderSummary(paymentInfo) {
    return new Promise((resolve, reject) => {
        resolve(paymentInfo+ "order Summary");
    })
}

function updateWallet(orderSummary) {
    return new Promise((resolve, reject) => {
        resolve(123);
        const err=  new Error('Unable to update wallet');
        reject(err);
    })
}

function validateCart(cart) {
    return carts.includes(cart);
}

setTimeout(() => {
    console.log('setTimeout 12345');
})

