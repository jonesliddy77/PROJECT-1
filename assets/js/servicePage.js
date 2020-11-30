// DOM Elements
const buttonEl = $("button");
const serviceSecEl = $(".serviceSection");

// Global
const photoArr = [
    {
        service: "Photo Retouch",
        freelancer: "Bobby Booper",
        contact: "123-456-7890",
        description: "Want to publish perfect and beautiful selfies to Facebook or Instagram and make your friends go wow but are missing the budget to buy photo editor software?",
        img: "./assets/img/services/retouch.jpg" // Credits to https://unsplash.com/@zvandrei
    },
    {
        service: "Portrait Photography",
        freelancer: "John Jingle",
        contact: "234-567-8901",
        description: "Need headshots for your LinkedIn Profile? Need that sweet Tinder profile update? John's got your back. All services include photo retouching.",
        img: "./assets/img/services/portrait.jpg" // Credits to https://unsplash.com/@zvandrei
    },
    {
        service: "Wedding Photography",
        freelancer: "Henry Henny",
        contact: "254-254-2541",
        description: "Want you best day to be captured and saved? Henry can help provide you the best service to get you that best day captured.",
        img: "./assets/img/services/wedding.jpg" // Credits to https://unsplash.com/@beatriz_perez
    },
    {
        service: "Product Photography",
        freelancer: "Henry Henny",
        contact: "254-254-2541",
        description: "Need that right amount of shadows on that wine bottle? Need that update on your products for your website? Let us capture these products with our best team on board.",
        img: "./assets/img/services/product.jpg" // Credits to https://unsplash.com/@mattykwong1
    }
];
const videoArr = [
    {
        service: "Video Editing",
        freelancer: "Henry Henny",
        contact: "254-254-2541",
        description: "Got that juicy B-roll, but don't have the time to edit it? We got you covered. We can edit those clips for you and treat you a nice hand massage (not really).",
        img: "./assets/img/services/video-editing.jpg" // Credits to https://unsplash.com/@jakobowens1
    },
    {
        service: "Ad Production",
        freelancer: "Bobby Booper",
        contact: "123-456-7890",
        description: "Hello, clients, look at your ad, now back to me, now back at your ad, now back to me. Sadly, your ad isn’t my ad, but if he stopped using Microsodt paint and switched to Persona's Ad services, he could get ad traffic like me.",
        img: "./assets/img/services/ad-production.jpg" // // Credits to https://unsplash.com/@jakobowens1
    },
    {
        service: "Music Video Production",
        freelancer: "Bobby Booper",
        contact: "123-456-7890",
        description: "Need that K-pop level of professional production? We got the gear, personnel, and minds for it.",
        img: "./assets/img/services/mv-production.jpg" // Credits to https://unsplash.com/@kalvisuals
    },
    {
        service: "Cinematography",
        freelancer: "John Jingle",
        contact: "234-567-8901",
        description: "I like movies and I'm sure you like it, too. We have something in common. Use my services ;)",
        img: "./assets/img/services/cinema.jpg" // Credits to https://unsplash.com/@jakobowens1
    }
];
const audioArr = [
    {
        service: "Voice Acting",
        freelancer: "Jacob Jakey",
        contact: "505-555-4444",
        description: "From anime, to dubbing, to just singing. We have you covered. Need that awesome voice for your next trailer?",
        img: "./assets/img/services/voice-act.jpg" // Credits to https://unsplash.com/@henmankk
    },
    {
        service: "Audio Mixing",
        freelancer: "John Doe",
        contact: "111-222-3334",
        description: "It's like putting audio into a bowl and whisking it. Tryout our services and whisk it all!",
        img: "./assets/img/services/audio-m.jpg" // Credits to https://unsplash.com/@imranpro
    },
    {
        service: "Post Production",
        freelancer: "Vincent Chen",
        contact: "770-880-1314",
        description: "Pre-production is just as important as post-production. Post-production services ensure our clients have a perfect clean edits and details for finalization.",
        img: "./assets/img/services/pp.jpg" // Credits to https://unsplash.com/@tompottiger
    }
];
const designArr = [
    {
        service: "Graphic Design",
        freelancer: "Vincent Chen",
        contact: "770-880-1314",
        description: "Need a logo done asap? Got that idea for a new ad? Need someone to sketch out that beautiful ideas of yours? Yeah, I got you.",
        img: "./assets/img/services/graphic.jpg" // Credits to https://unsplash.com/@kseverin
    },
    {
        service: "Twitch Emotes",
        freelancer: "Jacob Jakey",
        contact: "505-555-4444",
        description: "Poggers. Kappa. Kekw kekw kekw. Pogchamp. Sadge.",
        img: "./assets/img/services/twitch.jpg" // Credits to https://unsplash.com/@casparrubin
    },
    {
        service: "3D Print",
        freelancer: "Jacob Jakey",
        contact: "505-555-4444",
        description: "We can print just about anything and everything for you. Need help with a particular design? We can also help with that!",
        img: "./assets/img/services/3d.jpg" // Credits to https://unsplash.com/@neonbrand
    },
];
const programArr = [
    {
        service: "App Development",
        freelancer: "Darrell Robinson",
        contact: "888-000-8080",
        description: "Have that nice app idea, but don't where to go? Need help planning and creating and implementing these ideas? We got you covered!",
        img: "./assets/img/services/app.jpg" // Credits to https://unsplash.com/@rami_alzayat
    },
    {
        service: "UI Design",
        freelancer: "Jeremy Zhu",
        contact: "254-253-2544",
        description: "We can create smooth animations on the UI to designing UI elements such buttons, icons, sliders, etc. We can also create visually appealing colors and designs to help aid clients' needs.",
        img: "./assets/img/services/css.jpg" // Credits to https://unsplash.com/@casparrubin
    },
    {
        service: "UX Design",
        freelancer: "Jones Liddy",
        contact: "555-555-5554",
        description: "Need that bare bones of a website created? Your last website ended with a bad user experience? Our service includes humanizing technology.",
        img: "./assets/img/services/ux.jpg" // Credits to https://unsplash.com/@kellysikkema
    },
    {
        service: "SEO Optimization",
        freelancer: "Joe Park",
        contact: "777-772-7777",
        description: "Not getting enough traffic on your website? We can help optimize your website for better traffic. Shipping and handling not included.",
        img: "./assets/img/services/seo.jpg" // Credits to https://unsplash.com/@austindistel
    },
];

$("button").click(function(event) {
    event.preventDefault();
    // console.log($(this), "hi");
    var value = $(this).find("p").text();
    // console.log(value);
    serviceSecEl.empty();

    // if statements that render each card in the arrays above
    if(value === "Photography") {
        console.log("this is photos");
        for (let i = 0; i < photoArr.length; i++) {
            serviceSecEl.append(`
                <div class="wrapperDiv">
                    <figure class="image">
                        <img src="${photoArr[i].img}" alt="Placerholder img">
                    </figure>    
                    <div class="customText">
                        <h1 class="customTitle">${photoArr[i].service}</h1>
                        <h5 class="customName">${photoArr[i].freelancer}</h5>
                        <h5 class="customContact">${photoArr[i].contact}</h5>
                        <p class="customContent">${photoArr[i].description}</p>
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
                    <figure class="image">
                        <img src="${videoArr[i].img}" alt="Placerholder img">
                    </figure>  
                    <div class="customText">
                        <h1 class="customTitle">${videoArr[i].service}</h1>
                        <h5 class="customName">${videoArr[i].freelancer}</h5>
                        <h5 class="customContact">${videoArr[i].contact}</h5>
                        <p class="customContent">${videoArr[i].description}</p>
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
                    <figure class="image">
                        <img src="${audioArr[i].img}" alt="Placerholder img">
                    </figure>  
                    <div class="customText">
                        <h1 class="customTitle">${audioArr[i].service}</h1>
                        <h5 class="customName">${audioArr[i].freelancer}</h5>
                        <h5 class="customContact">${audioArr[i].contact}</h5>
                        <p class="customContent">${audioArr[i].description}</p>
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
                    <figure class="image">
                        <img src="${designArr[i].img}" alt="Placerholder img">
                    </figure>  
                    <div class="customText">
                        <h1 class="customTitle">${designArr[i].service}</h1>
                        <h5 class="customName">${designArr[i].freelancer}</h5>
                        <h5 class="customContact">${designArr[i].contact}</h5>
                        <p class="customContent">${designArr[i].description}</p>
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
                    <figure class="image">
                        <img src="${programArr[i].img}" alt="Placerholder img">
                    </figure>  
                    <div class="customText">
                        <h1 class="customTitle">${programArr[i].service}</h1>
                        <h5 class="customName">${programArr[i].freelancer}</h5>
                        <h5 class="customContact">${programArr[i].contact}</h5>
                        <p class="customContent">${programArr[i].description}</p>
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

