const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';


let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://www.webdevelopersnotes.com/wp-content/uploads/browsers-list.jpg') {
      myImage.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJrzszHOxmgcCuTHXqLifqH7d1bveny8ZzKw&usqp=CAU');
    } else {
      myImage.setAttribute('src','https://www.webdevelopersnotes.com/wp-content/uploads/browsers-list.jpg');
    }
}

let myBtn = document.querySelector('button');
let myHeadin = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeadin.textContent = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeadin.textContent = 'Mozilla is cool, ' + storedName;
}

myBtn.onclick = function() {
  setUserName();
}