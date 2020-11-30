# Persona: Freelancer's Service

## Description

This application is intended to help clients find the appropriate freelancing services to make their ideas into reality. 

## Table of Contents

* [Features](#Features)
* [Links](#Links)
* [Demo](#Demo)
* [Language](#Language)
* [Code-Example](#Code-Example)
* [Developer-Notes](#Developer-Notes)
* [Reference](#Reference)
* [Credits](#Credits)
* [Contributors](#Contributors)
* [License](#License)

## Features
Main Features: 

* A fully functional navigation bar for accessing the different parts of the website.
* Sticky navigation bar follows the user as they traverse from the top of the webpage to the bottom. 
* A testimonials section that scrolls as the user clicks on the different dots.
* A fully functional services page with drop down menu list.
* Location tracker API dynaically updates based on user's IP address data. 
* Payment API allows user's to demo paying information in their browser. 

## Links

* Project Repo: [Repository](https://github.com/jonesliddy77/Persona)
* GitHub Page: [Website](https://jonesliddy77.github.io/Persona/)

## Demo

![Nothing Here]()

## Language

* JavaScript
* HTML
* CSS
* [jQuery](https://jquery.com/)
* [Bulma](https://bulma.io/)

## Code-Example

Under Construction

## Developer-Notes

> From Jeremy Zhu
* In the initial planning phase of our project, we were planning on creating an interactable travel application, however we chose to pivot to creating a freelancing services website.
    * The idea was to gain invaluable experience creating a professional-looking services website to better understand how clients and prospective freelancers interact with UI/UX design choices.
    * This project allowed us to gain some insight into how much work goes into desiging the front-end of a website.
* Learning Bulma's CSS framework was comparable in difficulty to Bootstrap's CSS framework: both are quite simple, developer friendly, and the CSS classifications were very straight forward.
    * Besides Bulma's CSS framework, I implemented my own custom CSS to fill in the gaps that Bulma did not work.
    * The overall UI/UX design of our website was heavily inspired by fiverr.
* We had a lot of ideas for our final design, but, due to technical limitations they were scrapped:
    * We had a search bar, but didn't end up using it, because we could not get it to work with our two APIs. 
    * We used a for loop to render each service card, then the append() method from jQuery, and employed template literals with backticks to insert values as needed.
    * Sites employed for styling elements: 
        * Font Awesome some icons on the site.
        * Google Fonts for the fonts on the site.
        * Flaticon for the service section on the index.html.

## Reference

These are the websites we used as references: 

> - [Developer Mozilla](https://developer.mozilla.org/en-US/) || Learn a good amount of methods and functions here.
> - [W3School](https://www.w3schools.com/) || jQuery Methods and uses were referenced here.
> - [StackOverflow](https://www.stackoverflow.com/) || Most issues I had were resolved from looking at other people's problems.
> - [CSS-Tricks](https://css-tricks.com/template-literals/) || CSSTRicks has an article on Template Literals, I used this as a guide to create my own.
> - [Bulma](https://bulma.io/documentation/) || We used some Bulma CSS to help make most of the website.

How to create a good README here: 

> - [GitHub Docs](https://docs.github.com/en/free-pro-team@latest/github/writing-on-github/basic-writing-and-formatting-syntax) || Learn most of my README syntax here.
> - [Akash Nimare](https://medium.com/@meakaakka/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3) || Based my README from his person.
> - [Mark Down Guide](https://www.markdownguide.org/cheat-sheet/) || README Syntax

## Credits

These are the website we used for their designs, arts, etc:

> - [Unsplash](https://unsplash.com/) || All service images come from here. Credits to the all the artists. We do not own any of them.
> - [fiverr](https://www.fiverr.com/) || We based our idea and website on fiverr's homepage. Most of the ideas were inspired here.
> - [Flaticon: Pixel Perfect](https://www.flaticon.com/authors/pixel-perfect) || Our explore services section uses this artists icons.

APIs Used: 

> - [Geoapify](https://apidocs.geoapify.com/) || Our location tracker is from this API.
> - [PaymentRequest API](https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API) || Our payment information is from this API. 


## Contributors

> Design Team
* Jeremy Zhu
    * Design the overall website.
    * Created the navigation bar, logo, all slogans, service page, service page cards, animations, footer, header, social media tags, JS to render the service cards, trusted by section, most hover effects.
    * Clean up CSS and HTML code as needed.
    * Created README file and updating.
    * Created the google document for project proposal
    * Collaborated with Joe to get the Payment API to work.
* Jones Liddy
    * Created the group repository, testimonals section, about us sections, dropdown on service page, Media Queries on service page, help woth service page js cards, Creating about us cards.
    * Clean up CSS and HTML code as needed.
    * Created the initial files needed.
> Function Team
* Joe Park
    * Worked on the payment API
    * Added the API to the service.html 
* Darrell Robinson
    * Worked on the Geoapify API
    * Added the API to the index.html and service.html

## License

MIT © [Jeremy Zhu](https://github.com/jeishu) [Jones Liddy](https://github.com/jonesliddy77) [Joe Park](https://github.com/Ysdra) [Darrell Robinson](https://github.com/Darrellfr3) 
