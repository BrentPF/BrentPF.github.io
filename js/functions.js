var typeSpeed = 100;
var isPrinting = false;
var line;
window.onload = function() {
    line = document.getElementById("About");
    moveRight(document.getElementById("screen"));
  };

function resizeScreen(){
    document.getElementById("screen").style.height = "80%";
}

function moveRight(screen) {
    screen.style.left = "50%";
    setTimeout(growDown, 1500, screen);
}

function growDown(screen){
    screen.style.height = "80%";
    setTimeout(screenText, 1500, document.getElementById("screenText"));
}

function screenText(screenBody){
    screenBody.style.color = "black";
    //document.getElementById("Name").innerText = "> Brent P.F.";
    screenBody.style.color = "white";
    //screenBody.innerText = screenBody.innerText + "\n>\xa0";
    //var line = document.getElementById("About");
    //line.innerHTML = "bruh";
    setTimeout(printName, typeSpeed, document.getElementById("Name"), ">\xa0Brent\xa0P.F.", 0);
}

function printName(screenBody, text, index){
    if (index < text.length){
        screenBody.innerText = screenBody.innerText + text.charAt(index);
        setTimeout(printName, typeSpeed, screenBody, text, index+1);
    } else {
        document.getElementById("About").innerText = ">\xa0";
        setTimeout(printAbout, typeSpeed, line, "About", 0);
    }
}

function printAbout(screenBody, text, index){
    if (index < text.length){
        screenBody.innerHTML = screenBody.innerHTML + text.charAt(index);
        setTimeout(printAbout, typeSpeed, screenBody, text, index+1);
    } else {
        document.getElementById("Portfolio").innerText = ">\xa0";
        setTimeout(printPortfolio, typeSpeed, document.getElementById("Portfolio"), "Portfolio", 0);
    }
}

function printPortfolio(screenBody, text, index){
    if (index < text.length){
        screenBody.innerHTML = screenBody.innerHTML + text.charAt(index);
        setTimeout(printPortfolio, typeSpeed, screenBody, text, index+1);
    } else {
        document.getElementById("Contact").innerText = ">\xa0";
        setTimeout(printContact, typeSpeed, document.getElementById("Contact"), "Contact", 0);
    }
}

function printContact(screenBody, text, index){
    if (index < text.length){
        screenBody.innerHTML = screenBody.innerHTML + text.charAt(index);
        setTimeout(printContact, typeSpeed, screenBody, text, index+1);
    }
}