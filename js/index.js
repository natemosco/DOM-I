const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
let navA = document.querySelectorAll('nav a');
navA[0].textContent = siteContent['nav']['nav-item-1'];
navA[1].textContent = siteContent['nav']['nav-item-2'];
navA[2].textContent = siteContent['nav']['nav-item-3'];
navA[3].textContent = siteContent['nav']['nav-item-4'];
navA[4].textContent = siteContent['nav']['nav-item-5'];
navA[5].textContent = siteContent['nav']['nav-item-6'];
// How to do this with for each????? 
// navA.forEach(link => {
//   for (let index = 1; index < siteContent[nav].length-1; index++) {
//     link.textContent = siteContent['nav']['nav-item-[index]']
//   }
// });
// Alternate thought is this: how to make an array of json nav-items so that you can pass in the data using either a spread operator or the .apply method like: .apply(null,'array-of-nav-items')

// Or maybe see if there is a way to use the spread operator in the Json object to get this to work...

let headerText = document.querySelector('.cta-text h1');
headerText.textContent = siteContent['cta']['h1'];
let headerButton = document.querySelector('.cta-text button');
headerButton.textContent = siteContent['cta']['button'];


let mainImg = document.getElementById('cta-img');
mainImg.setAttribute('src', siteContent['cta']["img-src"]);

let contentHeaders = document.querySelectorAll('.top-content h4, .bottom-content h4');
// or
// let contentHeaders = document.querySelectorAll('h4');
contentHeaders[0].textContent = siteContent['main-content']['features-h4'];
contentHeaders[1].textContent = siteContent['main-content']['about-h4'];
contentHeaders[2].textContent = siteContent['main-content']['services-h4'];
contentHeaders[3].textContent = siteContent['main-content']['product-h4'];
contentHeaders[4].textContent = siteContent['main-content']['vision-h4'];

let contentText = document.querySelectorAll('.top-content p, .bottom-content p');
contentText[0].textContent = siteContent['main-content']['features-content'];
contentText[1].textContent = siteContent['main-content']['about-content'];
contentText[2].textContent = siteContent['main-content']['services-content'];
contentText[3].textContent = siteContent['main-content']['product-content'];
contentText[4].textContent = siteContent['main-content']['vision-content'];

let middleBanner = document.getElementById('middle-img');
middleBanner.setAttribute('src', siteContent['main-content']['middle-img-src']);

let contactSection = document.querySelectorAll('.contact h4, .contact p');
contactSection[0].textContent = siteContent['contact']['contact-h4'];
contactSection[1].textContent = siteContent['contact']['address'];
contactSection[2].textContent = siteContent['contact']['phone'];
contactSection[3].textContent = siteContent['contact']['email'];

let footerText = document.querySelector('footer p');
footerText.textContent = siteContent['footer']['copyright'];