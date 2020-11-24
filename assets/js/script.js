// Start of Google Pay API Code // 

// if (window.PaymentRequest) {
//     const supportedPaymentMethods = 
//     [
//         {
//             supportedMethods: ['basic-card']
//         }
//     ];

//     const paymentDetails = {
//         total: {
//             label: 'Total Cost',
//             amount: {
//                 currency: 'USD',
//                 value: 50
//             }
//         }
//     }

// const options = {}

// const paymentRequest = new PaymentRequest(
//     supportedPaymentMethods, paymentDetails, options
// );


// paymentRequest.show()
//     .then(payment => console.log(payment))
//     .catch(error => console.error(error));

// }
// else {
    // Fail-safe option if the above API does not work
// }

// End of Google Pay API Code // 