var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');

var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/horizon.png') {
        myImage.setAttribute('src', 'images/daas.png');
    } else {
        myImage.setAttribute('src', 'images/horizon.png');
    }
}

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'VMware Horizon is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'VMware Horizon is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}