// DOM Elements
const buttonEl = $("button");
const serviceSecEl = $(".serviceSection");

// Global
const photoArr = [
    {
        service: "Photo Retouch",
        freelancer: "Bobby Booper",
        contact: "123-456-7890",
        description: "Want to publish perfect and beautiful selfies to Facebook or Instagram and make your friends go wow but are missing the budget to buy photo editor software? Persona’s photo retouch service has your back. This service is also included in the photography services."
    },
    {
        service: "Portrait Photography",
        freelancer: "John Jingle",
        contact: "234-567-8901",
        description: "Need headshots for your LinkedIn Profile? Need that sweet Tinder profile update? John's got your back. All services include photo retouching."
    },
    {
        service: "Wedding Photography",
        freelancer: "Henry Henny",
        contact: "254-254-2541",
        description: "Want you best day to be captured and saved? Henry can help provide you the best service to get you that best day captured."
    },
    {
        service: "Product Photography",
        freelancer: "Henry Henny",
        contact: "254-254-2541",
        description: "Need that right amount of shadows on that wine bottle? Need that update on your products for your website? Let us capture these products with our best team on board."
    }
];
const videoArr = [
    {
        service: "Video Editing",
        freelancer: "Henry Henny",
        contact: "254-254-2541",
        description: "Got that juicy B-roll, but don't have the time to edit it? We got you covered. We can edit those clips for you and treat you a nice hand massage (not really)."
    },
    {
        service: "Ad Production",
        freelancer: "Bobby Booper",
        contact: "123-456-7890",
        description: "Hello, clients, look at your ad, now back to me, now back at your ad, now back to me. Sadly, your ad isn’t my ad, but if he stopped using Microsodt paint and switched to Persona's Ad services, he could get ad traffic like me."
    },
    {
        service: "Music Video Production",
        freelancer: "Bobby Booper",
        contact: "123-456-7890",
        description: "Need that K-pop level of professional production? We got the gear, personnel, and minds for it."
    },
    {
        service: "Cinematography",
        freelancer: "John Jingle",
        contact: "234-567-8901",
        description: "I like movies and I'm sure you like it, too. We have something in common. Use my services ;)"
    }
];
const audioArr = [
    {
        service: "Voice Acting",
        freelancer: "Jacob Jakey",
        contact: "505-555-4444",
        description: "From anime, to dubbing, to just singing. We have you covered. Need that awesome voice for your next trailer?"
    },
    {
        service: "Audio Mixing",
        freelancer: "John Doe",
        contact: "111-222-3334",
        description: "It's like putting audio into a bowl and whisking it. Tryout our services and whisk it all!"
    },
    {
        service: "Post Production",
        freelancer: "Vincent Chen",
        contact: "770-880-1314",
        description: "Pre-production is just as important as post-production. Pos-production services ensure our clients have a perfect clean edits and details for finalization."
    }
];
const designArr = [
    {
        service: "Graphic Design",
        freelancer: "Vincent Chen",
        contact: "770-880-1314",
        description: "Need a logo done asap? Got that idea for a new ad? Need someone to sketch out that beautiful ideas of yours? Yeah, I got you."
    },
    {
        service: "Twitch Emotes",
        freelancer: "Jacob Jakey",
        contact: "505-555-4444",
        description: "Poggers. Kappa. Kekw kekw kekw. Pogchamp. Sadge."
    },
    {
        service: "3D Print",
        freelancer: "Jacob Jakey",
        contact: "505-555-4444",
        description: "We can print just about anything and everything for you. Need help with a particular design? We can also help with that!"
    },
];
const programArr = [
    {
        service: "App Development",
        freelancer: "Darrell Robinson",
        contact: "888-000-8080",
        description: "Have that nice app idea, but don't where to go? Need help planning and creating and implementing these ideas? We got you covered!"
    },
    {
        service: "UI Design",
        freelancer: "Jeremy Zhu",
        contact: "254-253-2544",
        description: "We can create smooth animations on the UI to designing UI elements such buttons, icons, sliders, etc. We can also create visually appealing colors and designs to help aid clients' needs."
    },
    {
        service: "UX Design",
        freelancer: "Jones Liddy",
        contact: "555-555-5554",
        description: "Need that bare bones of a website created? Your last website ended with a bad user experience? Our service includes humanizing technology."
    },
    {
        service: "SEO Optimization",
        freelancer: "Joe Park",
        contact: "777-772-7777",
        description: "Not getting enough traffic on your website? We can help optimize your website for better traffic. Shipping and handling not included."
    },
];

$("button").click(function(event) {
    event.preventDefault();
    // console.log($(this), "hi");
    var value = $(this).find("p").text();
    // console.log(value);
    serviceSecEl.empty();

    if(value === "Photography") {
        console.log("this is photos");
        for (let i = 0; i < photoArr.length; i++) {
            serviceSecEl.append(`
                <div class="wrapperDiv">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placerholder img">
                    <div class="customText">
                        <h1 class="customTitle">${photoArr[i].service}</h1>
                        <h5 class="customName">${photoArr[i].freelancer}</h5>
                        <h5 class="customContact">${photoArr[i].contact}</h5>
                        <p class="customContent">${photoArr[i].description}</p>
                        <div id="Google"></div>
                    </div>
                </div>
            `);
        }
    }
    else if (value === "Videography") {
        console.log("this is video");
        for (let i = 0; i < videoArr.length; i++) {
            serviceSecEl.append(`
                <div class="wrapperDiv">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placerholder img">
                    <div class="customText">
                        <h1 class="customTitle">${videoArr[i].service}</h1>
                        <h5 class="customName">${videoArr[i].freelancer}</h5>
                        <h5 class="customContact">${videoArr[i].contact}</h5>
                        <p class="customContent">${videoArr[i].description}</p>
                        <div id="Google"></div>
                    </div>
                </div>
            `);
        }
    }
    else if (value === "Audio") {
        console.log("this is audio");
        for (let i = 0; i < audioArr.length; i++) {
            serviceSecEl.append(`
                <div class="wrapperDiv">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placerholder img">
                    <div class="customText">
                        <h1 class="customTitle">${audioArr[i].service}</h1>
                        <h5 class="customName">${audioArr[i].freelancer}</h5>
                        <h5 class="customContact">${audioArr[i].contact}</h5>
                        <p class="customContent">${audioArr[i].description}</p>
                        <div id="Google"></div>
                    </div>
                </div>
            `);
        }
    }
    else if (value === "Design") {
        console.log("this is design");
        for (let i = 0; i < designArr.length; i++) {
            serviceSecEl.append(`
                <div class="wrapperDiv">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placerholder img">
                    <div class="customText">
                        <h1 class="customTitle">${designArr[i].service}</h1>
                        <h5 class="customName">${designArr[i].freelancer}</h5>
                        <h5 class="customContact">${designArr[i].contact}</h5>
                        <p class="customContent">${designArr[i].description}</p>
                        <div id="Google"></div>
                    </div>
                </div>
            `);
        }
    }
    else if (value === "Programming") {
        console.log("this is program");
        for (let i = 0; i < programArr.length; i++) {
            serviceSecEl.append(`
                <div class="wrapperDiv">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placerholder img">
                    <div class="customText">
                        <h1 class="customTitle">${programArr[i].service}</h1>
                        <h5 class="customName">${programArr[i].freelancer}</h5>
                        <h5 class="customContact">${programArr[i].contact}</h5>
                        <p class="customContent">${programArr[i].description}</p>
                        <div id="Google"></div>
                    </div>
                </div>
            `);
        }
    }
    
})


/**
 * Define the version of the Google Pay API referenced when creating your
 * configuration
 *
 * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#PaymentDataRequest|apiVersion in PaymentDataRequest}
 */
const baseRequest = {
    apiVersion: 2,
    apiVersionMinor: 0
  };
  
  /**
   * Card networks supported by your site and your gateway
   *
   * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#CardParameters|CardParameters}
   * @todo confirm card networks supported by your site and gateway
   */
  const allowedCardNetworks = ["AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "VISA"];
  
  /**
   * Card authentication methods supported by your site and your gateway
   *
   * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#CardParameters|CardParameters}
   * @todo confirm your processor supports Android device tokens for your
   * supported card networks
   */
  const allowedCardAuthMethods = ["PAN_ONLY", "CRYPTOGRAM_3DS"];
  
  /**
   * Identify your gateway and your site's gateway merchant identifier
   *
   * The Google Pay API response will return an encrypted payment method capable
   * of being charged by a supported gateway after payer authorization
   *
   * @todo check with your gateway on the parameters to pass
   * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#gateway|PaymentMethodTokenizationSpecification}
   */
  const tokenizationSpecification = {
    type: 'PAYMENT_GATEWAY',
    parameters: {
      'gateway': 'example',
      'gatewayMerchantId': 'exampleGatewayMerchantId'
    }
  };
  
  /**
   * Describe your site's support for the CARD payment method and its required
   * fields
   *
   * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#CardParameters|CardParameters}
   */
  const baseCardPaymentMethod = {
    type: 'CARD',
    parameters: {
      allowedAuthMethods: allowedCardAuthMethods,
      allowedCardNetworks: allowedCardNetworks
    }
  };
  
  /**
   * Describe your site's support for the CARD payment method including optional
   * fields
   *
   * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#CardParameters|CardParameters}
   */
  const cardPaymentMethod = Object.assign(
    {},
    baseCardPaymentMethod,
    {
      tokenizationSpecification: tokenizationSpecification
    }
  );
  
  /**
   * An initialized google.payments.api.PaymentsClient object or null if not yet set
   *
   * @see {@link getGooglePaymentsClient}
   */
  let paymentsClient = null;
  
  /**
   * Configure your site's support for payment methods supported by the Google Pay
   * API.
   *
   * Each member of allowedPaymentMethods should contain only the required fields,
   * allowing reuse of this base request when determining a viewer's ability
   * to pay and later requesting a supported payment method
   *
   * @returns {object} Google Pay API version, payment methods supported by the site
   */
  function getGoogleIsReadyToPayRequest() {
    return Object.assign(
        {},
        baseRequest,
        {
          allowedPaymentMethods: [baseCardPaymentMethod]
        }
    );
  }
  
  /**
   * Configure support for the Google Pay API
   *
   * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#PaymentDataRequest|PaymentDataRequest}
   * @returns {object} PaymentDataRequest fields
   */
  function getGooglePaymentDataRequest() {
    const paymentDataRequest = Object.assign({}, baseRequest);
    paymentDataRequest.allowedPaymentMethods = [cardPaymentMethod];
    paymentDataRequest.transactionInfo = getGoogleTransactionInfo();
    paymentDataRequest.merchantInfo = {
      // @todo a merchant ID is available for a production environment after approval by Google
      // See {@link https://developers.google.com/pay/api/web/guides/test-and-deploy/integration-checklist|Integration checklist}
      // merchantId: '12345678901234567890',
      merchantName: 'Example Merchant'
    };
    return paymentDataRequest;
  }
  
  /**
   * Return an active PaymentsClient or initialize
   *
   * @see {@link https://developers.google.com/pay/api/web/reference/client#PaymentsClient|PaymentsClient constructor}
   * @returns {google.payments.api.PaymentsClient} Google Pay API client
   */
  function getGooglePaymentsClient() {
    if ( paymentsClient === null ) {
      paymentsClient = new google.payments.api.PaymentsClient({environment: 'TEST'});
    }
    return paymentsClient;
  }
  
  /**
   * Initialize Google PaymentsClient after Google-hosted JavaScript has loaded
   *
   * Display a Google Pay payment button after confirmation of the viewer's
   * ability to pay.
   */
  function onGooglePayLoaded() {
    const paymentsClient = getGooglePaymentsClient();
    paymentsClient.isReadyToPay(getGoogleIsReadyToPayRequest())
        .then(function(response) {
          if (response.result) {
            addGooglePayButton();
            // @todo prefetch payment data to improve performance after confirming site functionality
            // prefetchGooglePaymentData();
          }
        })
        .catch(function(err) {
          // show error in developer console for debugging
          console.error(err);
        });
  }
  
  /**
   * Add a Google Pay purchase button alongside an existing checkout button
   *
   * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#ButtonOptions|Button options}
   * @see {@link https://developers.google.com/pay/api/web/guides/brand-guidelines|Google Pay brand guidelines}
   */
  function addGooglePayButton() {
    const paymentsClient = getGooglePaymentsClient();
    const button =
        paymentsClient.createButton({onClick: onGooglePaymentButtonClicked});
    $('#Google').append(button);
  }
  
  /**
   * Provide Google Pay API with a payment amount, currency, and amount status
   *
   * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#TransactionInfo|TransactionInfo}
   * @returns {object} transaction info, suitable for use as transactionInfo property of PaymentDataRequest
   */
  function getGoogleTransactionInfo() {
    return {
      countryCode: 'US',
      currencyCode: 'USD',
      totalPriceStatus: 'FINAL',
      // set to cart total
      totalPrice: '1.00'
    };
  }
  
  /**
   * Prefetch payment data to improve performance
   *
   * @see {@link https://developers.google.com/pay/api/web/reference/client#prefetchPaymentData|prefetchPaymentData()}
   */
  function prefetchGooglePaymentData() {
    const paymentDataRequest = getGooglePaymentDataRequest();
    // transactionInfo must be set but does not affect cache
    paymentDataRequest.transactionInfo = {
      totalPriceStatus: 'NOT_CURRENTLY_KNOWN',
      currencyCode: 'USD'
    };
    const paymentsClient = getGooglePaymentsClient();
    paymentsClient.prefetchPaymentData(paymentDataRequest);
  }
  
  /**
   * Show Google Pay payment sheet when Google Pay payment button is clicked
   */
  function onGooglePaymentButtonClicked() {
    const paymentDataRequest = getGooglePaymentDataRequest();
    paymentDataRequest.transactionInfo = getGoogleTransactionInfo();
  
    const paymentsClient = getGooglePaymentsClient();
    paymentsClient.loadPaymentData(paymentDataRequest)
        .then(function(paymentData) {
          // handle the response
          processPayment(paymentData);
        })
        .catch(function(err) {
          // show error in developer console for debugging
          console.error(err);
        });
  }
  /**
   * Process payment data returned by the Google Pay API
   *
   * @param {object} paymentData response from Google Pay API after user approves payment
   * @see {@link https://developers.google.com/pay/api/web/reference/response-objects#PaymentData|PaymentData object reference}
   */
  function processPayment(paymentData) {
    // show returned data in developer console for debugging
      console.log(paymentData);
    // @todo pass payment token to your gateway to process payment
    paymentToken = paymentData.paymentMethodData.tokenizationData.token }


