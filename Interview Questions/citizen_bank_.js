function showText(text, time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(text)
            }, time)
        })
    }

    showText('Test', 100).then(console.log);

    const test = await showText('test', 1000);
    console.log(test);

    function order() {
        return new Promise((resolve, reject) => {
            resolve({id: 23, price: 125});
        });
    }

    function payment(val) {
        return new Promise((resolve, reject) => {
            resolve(`Order ${val.id}`);
        });
    }

    function invoice(val) {
        return new Promise((resolve, reject) => {
            resolve(`Invoice Print ${val.id}`);
        })
    }

    order()
     .then((val) => {
        return val;
    })
     .then((val) => {
        return val;
    })
    .then((val) => {
        return payment(val);
    })
    .then((result) => {
        return invoice(result); // order id is undefined
    }).then((val) => {
        console.log(val);
    })

    order().then(orderData => {
  return payment(orderData).then(paymentResult => {
    // orderData still accessible here via closure
    return invoice(orderData); // pass the ORIGINAL order data, not payment's return value
  }).then(val => console.log("Other:", val) ); // order id will print
});

//================

async function processOrder() { 
  const orderData = await order();           // { id: 23, price: 125 }
  const paymentResult = await payment(orderData); // "Order 23"
  const invoiceResult = await invoice(orderData);  // pass orderData, not paymentResult
  
  console.log(invoiceResult); // "Invoice Print 23"
}

processOrder();

async function processOrder1() {
  const orderData = await order();
  const [paymentResult, invoiceResult] = await Promise.all([
    payment(orderData),
    invoice(orderData),
  ]);
  console.log(paymentResult,   );
}

processOrder1();