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


//======================================================
/* LEARNED :  1) children not childnode
              2) convert HTML Collection to Array
              3) for in to loop through ( inner object )
              4) if() statement to check for correct tag
*/


let navBttn = document.querySelector('nav').children;  
let navBttnArray = Array.from(navBttn);

let i = 0;
for ( key in siteContent.nav) {

   if( key.substring(0,3) == 'nav' ){
      navBttnArray[i].innerHTML = siteContent.nav[key];
      i++;
   }
}



//======================================================

//NEED TO ADD BREAKS!!!!
let h1_el = document.querySelector("h1");
console.log(h1_el);
h1_el.innerHTML = siteContent["cta"]['h1'];

//======================================================

//FINISHED
let bttn_el = document.querySelector("button");
bttn_el.innerHTML = siteContent["cta"]["button"];

//======================================================

//FINISHED
let mainImg = document.getElementById("cta-img");
mainImg.src = "img/header-img.png";

//======================================================

//NEED TO REFACTOR
let contentBlocks = document.querySelectorAll(".text-content");

contentBlocks[0].children[0].textContent = siteContent['main-content']['features-h4'];       // 2 0
contentBlocks[0].children[1].textContent = siteContent['main-content']['features-content'];  // 2 1

contentBlocks[1].children[0].textContent = siteContent['main-content']['about-h4'];          // 2 2
contentBlocks[1].children[1].textContent = siteContent['main-content']['about-content'];     // 2 3

let middleImg = document.getElementById('middle-img');                                       // 2 4
middleImg.src = siteContent['main-content']['middle-img-src'];

contentBlocks[2].children[0].textContent = siteContent['main-content']['services-h4'];       // 2 5
contentBlocks[2].children[1].textContent = siteContent['main-content']['services-content'];  // 2 6

contentBlocks[3].children[0].textContent = siteContent['main-content']['product-h4'];        // 2 7
contentBlocks[3].children[1].textContent = siteContent['main-content']['product-content'];   // 2 8

contentBlocks[4].children[0].textContent = siteContent['main-content']['vision-h4'];         // 2 9
contentBlocks[4].children[1].textContent = siteContent['main-content']['vision-content'];    // 2 10

//======================================================

let contact = document.getElementsByClassName('contact');

contact[0].children[0].textContent = siteContent['contact']['contact-h4']; // 3 0
contact[0].children[1].textContent = siteContent['contact']['address'];    // 3 1
contact[0].children[2].textContent = siteContent['contact']['phone'];      // 3 2
contact[0].children[3].textContent = siteContent['contact']['email'];      // 3 3

//======================================================

let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];