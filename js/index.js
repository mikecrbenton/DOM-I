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

// lambda Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//======================================================
// SET THE 6 <a> LINKS IN <nav>  

let navBttn = document.querySelector('nav').children;  

let i = 0;
for ( key in siteContent.nav) {

   //ONLY LINKS IN JSON OBJECT - HANDLE IMAGE SEPARATELY ( ^ LAMBDA CODE ABOVE ^ )
   if( key.substring(0,3) == 'nav' ){
      navBttn[i].innerHTML = siteContent.nav[key];
      i++;
   }
}

/********************************************************* 
   // FROM STANDUP 6/3/20- MORE ELEGANT WAY TO ACCESS - 
   // DID NOT THINK ABOUT ACCESSING THE JSON "KEY" AS A STRING 

   const navLinks = document.querySelectorAll("nav a");
   
   navLinks.forEach( (eachTag, i) => {
      eachTag.textContent = siteContent.nav[`nav-item-${i+1}`];
   });

********************************************************/

//======================================================
// SET THE HEADER ( STILL NEED TO ADD <br> )

let h1_el = document.querySelector("h1");
h1_el.innerHTML = siteContent["cta"]['h1'];


//======================================================
// BUTTON

let bttn_el = document.querySelector("button");
bttn_el.innerHTML = siteContent["cta"]["button"];


//======================================================
// IMAGE HEADER

let mainImg = document.getElementById("cta-img");
mainImg.src = "img/header-img.png";


//======================================================
// PARAGRAPHS AND HEADERS

/* ------------------------------------------------
   Loop through the inner JSON object- placing values into
   the NodeList "contentBlocks" from index.html
   It has 5 divs, each with 2 html elements - 
   Example [0][0] and [0][1] then [1][0] and [1][1] 
   ( indexes 0 - 4 in the NodeList, and a separate case
   for handling the image from the JSON object )
   ------------------------------------------------*/

//GRAB THE HTML ELEMENTS ( 5 OF THEM - THIS DOES NOT GRAB THE IMAGE!! )
let contentBlocks = document.querySelectorAll(".text-content"); 

//COUNTERS
let currentDiv = 0;
let htmlElements = 0;

for ( key in siteContent['main-content']) {

      //HANDLE IMAGE FROM JSON SEPARATELY
      if( key === 'middle-img-src'){

         document.getElementById('middle-img').src = siteContent['main-content'][key];
         /* The image is only 1 html element - not 2 , so no need to increment for 2 htmlElements
            - it can stay set at 0 for the next <div> */

      }else{
         contentBlocks[ currentDiv ].children[ htmlElements ].textContent = siteContent['main-content'][key];
         htmlElements++;//
      }
       
      //RESET EVERY 2 LOOPS ( OR EACH DIV)
      if( htmlElements > 1 ) { 
         htmlElements = 0  // THIS RESETS TO 0 AFTER EVERY 2 PASSES FOR THE NEXT SET OF AN <h4> & <p>
         currentDiv++;     // THIS INCRIMENTS AFTER 2 PASSES FOR THE NEXT DIV
      };
}



//======================================================
// CONTACT BLOCK

let contact = document.getElementsByClassName('contact');


i = 0; //re-use

for( key in siteContent['contact']){

   contact[0].children[i].textContent = siteContent['contact'][key]; 
   i++
}



//======================================================
// COPYRIGHT

let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];


//=======================================================
// CHANGE LINKS TO GREEN

let navToGreen = document.querySelectorAll('nav a');
//console.log(navToGreen);

navToGreen.forEach( (eachTag) => {
   eachTag.style.color = 'green';
});

//==========================================================
// ADD NEW LINKS

// CREATE HTML ELEMENT
let newFrontElement = document.createElement('a');
let newEndElement = document.createElement('a');

// CREATE CONTENT
let newFrontText = document.createTextNode('Front');
let newEndText = document.createTextNode('End');

// APPEND CONTENT AND ADD ATTRIBUTES( helper function )
createNewElement(newFrontElement,newFrontText);
createNewElement(newEndElement,newEndText);

// ADD TO THE DOCUMENT
document.querySelectorAll('nav')[0].prepend(newFrontElement);
document.querySelectorAll('nav')[0].appendChild(newEndElement);



// HELPER FUNCTION
function createNewElement(typeOfElement, newContent ){
   typeOfElement.append(newContent);
   typeOfElement.setAttribute('href', '#');
   typeOfElement.style.color = 'green';
}