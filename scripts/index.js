var handledNavScroll = false;
var viewedFirstImage = false;

window.addEventListener("scroll", (event) => {
    let y = this.scrollY;
    handleNavOnScroll(y);

    handleContentOnscroll(y);
    handleFooterOnScroll(y);
});

function handleNavOnScroll(y){
    if(handledNavScroll == false){
        if(y > 0){
            setNavMenuFixed(true);
            setNavBarBoxHeight(true);
            setNavLanguageTop(true);
            handledNavScroll = true;
        }
    }
    else{
        if(y == 0){
            setNavMenuFixed(false);
            setNavBarBoxHeight(false);
            setNavLanguageTop(false);
            handledNavScroll = false;
        }
        else{
            handledNavScroll = true;
        }
    }
}

//fixes the menu
function setNavMenuFixed(fixNav){
    var myNav = document.getElementById('nav-menu-box');
    if(fixNav){
        myNav.style.position = 'fixed';
        myNav.style.top = "0";
        myNav.style.backgroundColor = "rgb(66, 66, 66)";
    }
    else{
        myNav.style.position = 'absolute';
        myNav.style.top = "200px";
        myNav.style.backgroundColor = "rgb(0, 21, 59)";
    }
}
function setNavBarBoxHeight(changeHeight){
    var myNavBar = document.getElementById('nav-bar-box');
    if(changeHeight){
        myNavBar.style.height = "0";
    }
    else{
        myNavBar.style.height = "300px";
    }
}
function setNavLanguageTop(changeTop){
    var myNav = document.getElementById('nav-language-box');
    if(changeTop){
        myNav.style.top = "-200px";
    }
    else{
        myNav.style.top = "0";
    }
}

//methods for the boxes on scroll
function handleContentOnscroll(y){
    if(y> 0){
        setFirstBox(true);
        setContentBox(true);
    }
    else{
        setFirstBox(false);
        setContentBox(false);
    }
    setTimeout(
        function(){
            if(y >0){
                //show second box
                setSecondBox(true);
            }
            else{
                setSecondBox(false);
                setThirdBox(false);
            }
        }, 1000
    );
    if(y >= 300){
        //show third box
        setThirdBox(true);
    }
    
}

//Methods for firstBox
//Method 1: setFirstBoxHeight(y) --> This will set the height upon scroll y location
//Method 3: setCarousel() --> slideshow of emojis :)
var freshPage = true;
var currentIndex = 0;
var time = 0;
setCarousel();

function setCarousel() {
  var i;
  var x = document.getElementsByClassName("emoji");
  if(freshPage){
      time = 0;
      freshPage = false;
  }
  else{
    time = 2000;
  }
    for (i = 0; i < x.length; i++) {
        if(i == currentIndex){
            x[i].style.top = "0";
            x[i].style.opacity = "1";
            x[i].style.transform = "scale(1)";
        }
        else{
            x[i].style.top = "-150px";
            x[i].style.opacity = "0";
            x[i].style.transform = "scale(0)";
        }
        
    }
  
  currentIndex++;
  if(currentIndex >= x.length){
      currentIndex = 0;
  }
  setTimeout(setCarousel, time); // Change image every 2 seconds
}


function setContentBox(show){
    var content = document.getElementById("content-box");
    if(show){
        content.style.backgroundColor = "white";
    }
    else{
        content.style.backgroundColor = "rgb(0, 21, 59)";
    }
}

function setFirstBox(show){
    var firstBox = document.getElementById('first-box');
    var firstBoxText = document.getElementById('first-box-text');
    var firstBoxNextText = document.getElementById('first-box-next-text');
    var firstBoxEmojis = document.getElementById('first-box-emojis');
    if(show){
        firstBox.style.position = "absolute";
        firstBox.style.top = "100px";
        firstBox.style.height = "0";
        firstBox.style.padding = "0";
        firstBoxText.style.top = "-50px";
        firstBoxNextText.style.top = "-50px";
        firstBoxEmojis.style.opacity = "0";
        firstBoxEmojis.style.top = "-50px";
    }
    else{
        firstBox.style.position = "static";
        firstBox.style.height = "600px";
        firstBox.style.padding = "20px";
        firstBoxText.style.top = "60%";
        firstBoxNextText.style.top = "65%";
        firstBoxEmojis.style.opacity = "1";
        firstBoxEmojis.style.top = "70%";
    }
}

function setSecondBox(show){
    var secondContent = document.getElementById("second-box");
    var secondImage = document.getElementById("my-second-image-box");
    var secondText = document.getElementById("my-second-text-box");
    if(show){
        secondImage.style.opacity = "1";
        secondImage.style.left = "200px";
        secondText.style.opacity = "1";
        secondText.style.right = "200px";
    }
    else{
        secondImage.style.opacity = "0";
        secondImage.style.left = "0";
        secondText.style.opacity = "0";
        secondText.style.right = "0";
    }
}

function setThirdBox(show){
    const thirdContent = document.getElementById("third-box");
    const thirdImage = document.getElementById("my-third-image-box");
    const thirdText = document.getElementById("my-third-text-box");
    if(show){
        thirdImage.style.opacity = "1";
        thirdImage.style.right = "200px";
        thirdText.style.opacity = "1";
        thirdText.style.left = "200px";
    }
    else{
        thirdImage.style.opacity = "0";
        thirdImage.style.right = "0";
        thirdText.style.opacity = "0";
        thirdText.style.left = "0";
    }
}

function handleFooterOnScroll(y){
    if(y > 600){
        setFooter(true);
    }
    else{
        setFooter(false);
    }
}

function setFooter(show){
    const footer = document.getElementById("footer-box");
    const bottomFooter = document.getElementById('footer-box-bottom');
    bottomFooter.style.bottom = "0";
    if(show){
        footer.style.backgroundColor = "rgb(69, 69, 69)";
    }
    else{
        footer.style.backgroundColor = "white";
    }
    
}