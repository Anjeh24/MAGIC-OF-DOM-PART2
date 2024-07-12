//import "../styles/style.css";
//Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];
  
  //Select and cache the <main> element in a variable named mainEl.
  
  let mainEl = document.querySelector('main');
  
  //Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
  //Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
  
  //let root = document.querySelector('.root');
  mainEl.style.backgroundColor = 'var(--main-bg)';
  
  //mainEl.style.backgroundColor = 'var(--main-bg)';
  
  //Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
  
  const head1 = document.createElement('h1');
  head1.textContent = "DOM Manipulation";
  mainEl.appendChild(head1);
  
  //Add a class of flex-ctr to mainEl.
  //Hint: Use the Element.classList API.
  
  mainEl.classList = "flex-ctr";
  
  //Part 2: Creating a Menu Bar
  //Next, create a blank menu bar that we can use to later add some interactivity to the page:
  
  //1. Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
  let topMenuEl = document.getElementById("top-menu");
  topMenuEl.style.height = "100%"
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
  topMenuEl.classList = "flex-around";
  
  
  // Part 3: Adding Menu Buttons
  // Very often, you will be working with data provided by external sources in a variety of ways.
  //  For this project, copy the following data structure to the top of your index.js file; you will use it to create your menu buttons.
  
  
   for (let a of menuLinks){
   
    let headerLinks = document.createElement('a');
  
     headerLinks.setAttribute('href', a.href);
    headerLinks.textContent  = a.text;
     topMenuEl.appendChild(headerLinks);
    
  
    
   }
  

   //part2
//part3: Creating the submenu

//Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.

   let subMenuEl = document.getElementById('sub-menu');
   console.log(subMenuEl)

//Set the height subMenuEl element to be "100%".


   subMenuEl.style.height = '100%';

   //Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.

   subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

   //Add the class of flex-around to the subMenuEl element.

   subMenuEl.className = 'flex-around';






  
  
  
  
  
  
  //new link element
  
  //const attri = document.createAttribute('href');
   
  // let ar = menuLinks[0].href
  // console.log(ar)