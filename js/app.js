/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Create Navigation links, add href and append to empty html ul
 * 
*/
const navItems = ['Home','About Us','Services', 'Contact']
const linkView = ['section1', 'section2', 'section3', 'section4']
const ul = document.querySelector('#navbar__list');

for(let i=0; i<navItems.length; i++){
    const li = document.createElement('li');
    const link =document.createElement('a');
    link.classList.add('nav_link')
    link.textContent = navItems[i];
    link.href = linkView[i];
    li.appendChild(link);
    ul.appendChild(li);
}


/**
 * End Global Variables
 * 
 
 * Start Helper Functions
//  select nav elements and sections to add active class function
*/
const navElements = document.querySelectorAll('.nav_link')
const sectionElements= document.querySelectorAll('section')
let currentSection = 'section1';
window.addEventListener('scroll', ()=>{
    sectionElements.forEach(sectionElement=>{
        if (window.scrollY >= sectionElement.offsetTop - sectionElement.clientHeight/2){
            currentSection = sectionElement.id;
        }
    })
    navElements.forEach(navElement=> {
        if(navElement.href.includes(currentSection)){
            navElement.classList.add('active');
        }
        else{
            navElement.classList.remove('active');
        }
    })
})


//  * End Helper Functions


//  * Begin Main Functions
// create scroll functionslity 
 
navElements.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      sectionElements.forEach((element)=>{
        if(link.href.includes(element.id)){
            const target = element;
            target.scrollIntoView({behavior:"smooth"});
        }

   
      })
    });
  });
  

