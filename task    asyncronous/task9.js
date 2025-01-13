function OrderTalabat( order , callback){
    console.log(`what is your order :  ${order}`);

    setTimeout(()=>{
        console.log(`the order ${order} has been placed`)
        callback(order) ;
    }, 2000)
}
OrderTalabat("burger" ,function (order){
    console.log(`Callback executed for ${order}`);
})





function prepareorder(order , callback){
    setTimeout(()=>{
    console.log(`your order ${order} in preparation`)
    callback(order)
    }, 3000)
   

}

prepareorder("burger" ,function (order){
    setTimeout(()=>{
        console.log(`your order is ready`)
    },4000)

function backageorder(order ,callback){
   setTimeout(() => {
    console.log(`burger in backage `)
    callback(order)
   },5000) 

}
function deliverorder(order , callback){
    setTimeout(() =>{
        console.log(`order is delivering`)
    },6000)

}

backageorder("burger" ,function(order){
    deliverorder("burger" ,function(order){
        
    })

})

})




// ا كوتش هاد حل شات جي بي  تي بس انا مو عارف اني لازم احط الدوا جوا بعض ولا متل ما انا حليت كل وحدة لحال بس بس انا زودت بالثواني 

// function placeOrder(order, callback) {
//     console.log(`Placing order for: ${order}`);
//     setTimeout(() => {
//       console.log(`Order for ${order} has been placed.`);
//       callback(order);
//     }, 2000); // تأخير لمدة 2 ثانية
//   }
  
//   function prepareOrder(order, callback) {
//     console.log(`Preparing: ${order}`);
//     setTimeout(() => {
//       console.log(`${order} is ready.`);
//       callback(order);
//     }, 3000); // تأخير لمدة 3 ثواني
//   }
  
//   function packageOrder(order, callback) {
//     console.log(`Packaging: ${order}`);
//     setTimeout(() => {
//       console.log(`${order} has been packaged.`);
//       callback(order);
//     }, 2000); // تأخير لمدة 2 ثانية
//   }
  
//   function deliverOrder(order, callback) {
//     console.log(`Delivering: ${order}`);
//     setTimeout(() => {
//       console.log(`${order} has been delivered.`);
//       callback();
//     }, 4000); // تأخير لمدة 4 ثواني
//   }
  
//   // مثال على كيفية استخدام الدوال:
//   placeOrder('Pizza', (order) => {
//     prepareOrder(order, (order) => {
//       packageOrder(order, (order) => {
//         deliverOrder(order, () => {
//           console.log('Order process is complete.');
//         });
//       });
//     });
//   });















function placeOrder(order, callback) {
    console.log(`Placing order: ${order}`);
    setTimeout(() => {
        console.log('Order placed.');
        callback();
    }, 1000);
}

function processPayment(order, callback) {
    console.log('Processing payment...');
    setTimeout(() => {
        console.log('Payment processed.');
        callback();
    }, 1000);
}

function prepareShipment(order, callback) {
    console.log('Preparing shipment...');
    setTimeout(() => {
        console.log('Shipment prepared.');
        callback();
    }, 1000);
}

function logCompletion() {
    console.log('Order process completed successfully.');
}

function processOrder(order) {
    placeOrder(order, () => {
        processPayment(order, () => {
            prepareShipment(order, () => {
                logCompletion();
            });
        });
    });
}


processOrder('Order123');