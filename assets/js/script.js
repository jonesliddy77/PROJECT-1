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

// Start of Geoapify API Code //

//Calls location API to gather location and print to nav bar
var queryURL="https://api.geoapify.com/v1/ipinfo?apiKey=805c055b98f34c71807194113fb46926"
$.ajax({url:queryURL,method:"GET"}).then(function(response){
    //Stores user's general location info into session
    sessionStorage.setItem("city",response.city.name);  //Grab with "sessionStorage.getItem("city")"
    sessionStorage.setItem("state",response.state.name);    //Grab with "sessionStorage.getItem("state")"
    sessionStorage.setItem("country",response.country.name);  //Grab with "sessionStorage.getItem("country")"

    //
    $(".navLocation").text(sessionStorage.getItem("city")+", "+sessionStorage.getItem("state"));
})

// End of Geoapify API Code //