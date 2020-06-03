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

let navBttn = document.querySelector('nav').children;  
navBttn = Array.from(navBttn);

let i = 0;
for ( key in siteContent.nav) {

   //ONLY LINKS - HANDLE IMAGE SEPARATELY
   if( key.substring(0,3) == 'nav' ){
      navBttn[i].innerHTML = siteContent.nav[key];
      i++;
   }
}

// navBttn.forEach( (eachTag) => {                        //---------------------------------------
//    eachTag.innerHTML = siteContent.nav['nav-item-1'];  // how to access JSON dynamically inside the loop??
                                                          //----------------------------------------
// })


//======================================================

//NEED TO ADD <br>!!!!
let h1_el = document.querySelector("h1");
console.log(h1_el);
h1_el.innerHTML = siteContent["cta"]['h1'];


//======================================================

let bttn_el = document.querySelector("button");
bttn_el.innerHTML = siteContent["cta"]["button"];


//======================================================

let mainImg = document.getElementById("cta-img");
mainImg.src = "img/header-img.png";


//======================================================

//GRAB THE HTML ELEMENTS ( THIS DOES NOT GRAB THE IMAGE!! )
let contentBlocks = document.querySelectorAll(".text-content"); 

/* ------------------------------------------------
   Loop through the inner JSON object- placing into
   the NodeList "contentBlocks" from index.html
   It has 5 divs, each with 2 html elements - 
   Example [0][0] and [0][1] then [1][0] and [1][1] 
   ( indexes 0 - 4 in the NodeList, and a separate case
   for handling the image from the JSON object )
   ------------------------------------------------*/

let currentDiv = 0;
let htmlElements = 0;

for ( key in siteContent['main-content']) {

      //WHEN IT HITS THE IMAGE, HANDLE SEPARATELY
      if( key === 'middle-img-src'){
         document.getElementById('middle-img').src = siteContent['main-content'][key];
         /* The image is only 1 html element - not 2 , so no need to increment htmlElements */
      }else{
         contentBlocks[ currentDiv ].children[ htmlElements ].textContent = siteContent['main-content'][key];
         htmlElements++;
      }
       
      //RESET EVERY 2 LOOPS
      if( htmlElements > 1 ) { 
         htmlElements = 0
         currentDiv++; 
      };
}




//======================================================

let contact = document.getElementsByClassName('contact');


i = 0; //re-use

for( key in siteContent['contact']){

   contact[0].children[i].textContent = siteContent['contact'][key]; 
   i++
}

console.log( contact );




//======================================================

let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];


//=======================================================

let navToGreen = document.querySelectorAll('nav a');
//console.log(navToGreen);

navToGreen.forEach( (eachTag) => {
   eachTag.style.color = 'green';
});

//==========================================================

// CREATE HTML ELEMENT
let newFrontElement = document.createElement('a');
let newEndElement = document.createElement('a');

// CREATE CONTENT
let newFrontText = document.createTextNode('Front');
let newEndText = document.createTextNode('End');

// APPEND CONTENT AND ADD ATTRIBUTES
newFrontElement.append(newFrontText);
newFrontElement.setAttribute('href', '#');
newFrontElement.style.color = 'green';

newEndElement.append(newEndText);
newEndElement.setAttribute('href', '#');
newEndElement.style.color = 'green';

// ADD TO THE DOCUMENT
document.querySelectorAll('nav')[0].prepend(newFrontElement);
document.querySelectorAll('nav')[0].appendChild(newEndElement);
