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
        freelancer: "",
        contact: "",
        description: ""
    },
    {
        service: "Music Video Production",
        freelancer: "",
        contact: "",
        description: ""
    },
    {
        service: "Cinematography",
        freelancer: "",
        contact: "",
        description: ""
    }
];
const audioArr = [
    {
        service: "Voice Acting",
        freelancer: "Jacob Jakey",
        contact: "",
        description: ""
    },
    {
        service: "Audio Mixing",
        freelancer: "John Doe",
        contact: "",
        description: ""
    },
    {
        service: "Post Production",
        freelancer: "Vincent Chen",
        contact: "",
        description: ""
    }
];
const designArr = [
    {
        service: "Graphic Design",
        freelancer: "",
        contact: "",
        description: ""
    },
    {
        service: "Logo Design",
        freelancer: "",
        contact: "",
        description: ""
    },
    {
        service: "Twitch Emotes",
        freelancer: "",
        contact: "",
        description: ""
    },
    {
        service: "3D Print",
        freelancer: "",
        contact: "",
        description: ""
    },
];
const programArr = [
    {
        service: "APP Development",
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
                        <button id="buyButton" style="display: inline;">Hire Me!</button>
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
                        <button id="buyButton" style="display: inline;">Hire Me!</button>
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
                        <button id="buyButton" style="display: inline;">Hire Me!</button>
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
                        <button id="buyButton" style="display: inline;">Hire Me!</button>
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
                        <button id="buyButton" style="display: inline;">Hire Me!</button>
                    </div>
                </div>
            `);
        }
    }
/**
 * Builds PaymentRequest for credit cards, but does not show any UI yet.
 *
 * @return {PaymentRequest} The PaymentRequest oject.
 */
function initPaymentRequest() {
    let networks = ['amex', 'diners', 'discover', 'jcb', 'mastercard', 'unionpay',
        'visa', 'mir'];
    let types = ['debit', 'credit', 'prepaid'];
    let supportedInstruments = [{
      supportedMethods: 'basic-card',
      data: {supportedNetworks: networks, supportedTypes: types},
    }];
  
    let details = {
      total: {label: 'Freelancer Service Rate For 1 Hour', amount: {currency: 'USD', value: '150.00'}},
      displayItems: [
        {
          label:'Please note, you can only reserve a freelancer 8 hours at a time',
          label: 'Original Services Amount',
          amount: {currency: 'USD', value: '150.00'},

          label: 'Total Services Amount',
          amount: {currency: 'USD', value: 8*('150.00')}
        },
      ],
    };
  
    return new PaymentRequest(supportedInstruments, details);
  }
  
  /**
   * Invokes PaymentRequest for credit cards.
   *
   * @param {PaymentRequest} request The PaymentRequest object.
   */
  function onBuyClicked(request) {
    request.show().then(function(instrumentResponse) {
      sendPaymentToServer(instrumentResponse);
    })
    .catch(function(err) {
      ChromeSamples.setStatus(err);
    });
  }
  
  /**
   * Simulates processing the payment data on the server.
   *
   * @param {PaymentResponse} instrumentResponse The payment information to
   * process.
   */
  function sendPaymentToServer(instrumentResponse) {
    // There's no server-side component of these samples. No transactions are
    // processed and no money exchanged hands. Instantaneous transactions are not
    // realistic. Add a 2 second delay to make it seem more real.
    window.setTimeout(function() {
      instrumentResponse.complete('success')
          .then(function() {
            document.getElementById('result').innerHTML =
                instrumentToJsonString(instrumentResponse);
          })
          .catch(function(err) {
            ChromeSamples.setStatus(err);
          });
    }, 2000);
  }
  
  /**
   * Converts the payment instrument into a JSON string.
   *
   * @private
   * @param {PaymentResponse} instrument The instrument to convert.
   * @return {string} The JSON string representation of the instrument.
   */
  function instrumentToJsonString(instrument) {
    let details = instrument.details;
    details.cardNumber = 'XXXX-XXXX-XXXX-' + details.cardNumber.substr(12);
    details.cardSecurityCode = '***';
  
    return JSON.stringify({
      methodName: instrument.methodName,
      details: details,
    }, undefined, 2);
  }
  
  const payButton = document.getElementById('buyButton');
  payButton.setAttribute('style', 'display: none;');
  if (window.PaymentRequest) {
    let request = initPaymentRequest();
    payButton.setAttribute('style', 'display: inline;');
    payButton.addEventListener('click', function() {
      onBuyClicked(request);
      request = initPaymentRequest();
    });
  } else {
    ChromeSamples.setStatus('This browser does not support web payments');
  }}




);

