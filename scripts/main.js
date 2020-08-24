var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/carousel-image-1.jpg') {
    myImage.setAttribute('src','images/carousel-image-2.jpg');
  }
  else {
    myImage.setAttribute ('src','images/carousel-image-1.jpg');
  }
}

var myButton = document.querySelector('button');
var myPar = document.querySelector('p');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myPar.textContent = 'Welcome to ensnare ' + myName;
}

if(localStorage.getItem('name')) {
  var storedName = localStorage.getItem('name');
  myPar.textContent = 'Welcome to ensnare ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
