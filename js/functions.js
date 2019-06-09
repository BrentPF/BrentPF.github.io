var links = ["About", "Portfolio", "Contact"];
var typeSpeed = 100;
var transitionTime = 1500;
var signature;
var screen;
var screenText;

window.onload = function() {
    signature = document.getElementById("Name");
    screen = document.getElementById("screen");
    screenText = document.getElementById("screenText");
    moveRight(screen);
  };

function moveRight(screen) {
    screen.style.left = "50%";
    setTimeout(growDown, transitionTime, screen);
}

function growDown(screen){
    screen.style.height = "80%";
    setTimeout(printText, transitionTime, screenText);
}

function printText(screenBody){
    screen.style.overflow = "auto";
    screenBody.style.color = "black";
    screenBody.style.color = "white";
    setTimeout(printName, typeSpeed, signature, ">\xa0Brent\xa0P.F.", 0);
}
//id is "About" etc.
function printLinks(links){
    var container = document.getElementById(links[0]);
    var index = 0;
    container.innerText = ">\xa0";
    setTimeout(printChar, typeSpeed, container, links[0], index, links, 0);
    
}

function printChar(container, id, index, links, linksIndex){
    if (index < id.length){
        container.innerHTML = container.innerHTML + id.charAt(index);
        setTimeout(printChar, typeSpeed, container, id, index+1, links, linksIndex);
    } else if (linksIndex+1 < links.length){
        var nextLink = document.getElementById(links[linksIndex+1]);
        nextLink.innerText = ">\xa0";
        setTimeout(printChar, typeSpeed, nextLink, links[linksIndex+1], 0, links, linksIndex+1);
    }
}

function printName(screenBody, text, index){
    if (index < text.length){
        screenBody.innerText = screenBody.innerText + text.charAt(index);
        setTimeout(printName, typeSpeed, screenBody, text, index+1);
    } else {
        printLinks(links);
    }
}