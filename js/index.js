

// 
document.getElementById("project1").addEventListener("mouseover", mouseOver);
document.getElementById("project1").addEventListener("mouseout", mouseOut);

document.getElementById("project4").addEventListener("mouseover", mouseOver3);
document.getElementById("project4").addEventListener("mouseout", mouseOut3);

function mouseOver() {
    document.getElementById("project1").style.width = "63%";
    document.getElementById("project2").style.width = "35%";
}

function mouseOut() {
    document.getElementById("project1").style.width = "35%";
    document.getElementById("project2").style.width = "63%";
}


function mouseOver3() {
    document.getElementById("project4").style.width = "63%";
    document.getElementById("project3").style.width = "35%";
    document.getElementById("pr-img").style.display = "block";
}

function mouseOut3() {
    document.getElementById("project4").style.width = "35%";
    document.getElementById("project3").style.width = "63%";
    document.getElementById("pr-img").style.display = "none";
}
// 


// 

document.getElementById("contactme").addEventListener("click", openContact);
document.getElementById("closebtn").addEventListener("click", closeContact);

function openContact() {
    document.getElementById("myContact").style.height = "100%";


  }
  
  /* Close */
  function closeContact() {
    document.getElementById("myContact").style.height = "0%";
  }
// 


document.getElementById("aboutme").addEventListener("click", openAboutme);
document.getElementById("closebtn2").addEventListener("click", closeAboutme);

function openAboutme() {
    document.getElementById("aboutMe").style.height = "100%";
  }
  
  /* Close */
  function closeAboutme() {
    document.getElementById("aboutMe").style.height = "0%";
  }
// 


var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.03em solid grey}";
    document.body.appendChild(css);
};


$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("scroll-overlay");
        } else {
            //remove the background property so it comes transparent again 
           $(".header").removeClass("scroll-overlay");
        }
    });
});



$(".menu-bars").click(function(){
  $(".menu-overlay").toggleClass("active-mobile");
});


function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("app").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "final.gltf", true);
    xhttp.send();
  }