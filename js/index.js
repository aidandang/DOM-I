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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Create selectors to point your data into elements

// Add nav item names
let navItems = document.querySelectorAll(`nav a`);
let arrayItems = ['Services', 'Product', 'Vision', 'Features', 'About', 'Contact'];

if (navItems.length == arrayItems.length) {
  let i = 0;
  navItems.forEach(navItem => {
    navItem.textContent = arrayItems[i];
    i++
  })
}

// Add text content of <h1> in 'cta' <section>
let ctah1 = document.querySelector('.cta-text h1');
let texth1 = `DOM<br> Is<br> Awesome`;
ctah1.innerHTML = texth1;

// Add button 'Get Started' to 'cta' <section>
let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent["cta"]["button"];

// Add the img src for 'cta' <section> image
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

// Add titles and contents to 'text-content' classes
let textContentTitles = document.querySelectorAll('.text-content h4');
let textContentParagraphs = document.querySelectorAll('.text-content p');

textContentTitles[0].textContent = siteContent["main-content"]["features-h4"];
textContentTitles[1].textContent = siteContent["main-content"]["about-h4"];
textContentTitles[2].textContent = siteContent["main-content"]["services-h4"];
textContentTitles[3].textContent = siteContent["main-content"]["product-h4"];
textContentTitles[4].textContent = siteContent["main-content"]["vision-h4"];

textContentParagraphs[0].textContent = siteContent["main-content"]["features-content"];
textContentParagraphs[1].textContent = siteContent["main-content"]["about-content"];
textContentParagraphs[2].textContent = siteContent["main-content"]["services-content"];
textContentParagraphs[3].textContent = siteContent["main-content"]["product-content"];
textContentParagraphs[4].textContent = siteContent["main-content"]["vision-content"];

// Add the img src for 'main-content' <section> image
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Add title and content to 'contact' class
let contactTitle = document.querySelector(".contact h4");
let contactParagraphs = document.querySelectorAll(".contact p");

contactTitle.textContent = siteContent["contact"]["contact-h4"];

contactParagraphs[0].textContent = siteContent["contact"]["address"];
contactParagraphs[1].textContent = siteContent["contact"]["phone"];
contactParagraphs[2].textContent = siteContent["contact"]["email"];

// Add content to footer
let footer = document.querySelector('footer p');
footer.textContent = siteContent["footer"]["copyright"]; 





