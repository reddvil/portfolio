ScrollReveal({ distance: '60px' });
ScrollReveal().reveal('.category', { delay: 100 });
ScrollReveal().reveal('.category', { easing: 'ease-out' });
ScrollReveal().reveal('.job-item', { delay: 100,  origin: 'right' , easing: 'ease-out', mobile: false , reset: true  });



window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


$(".showcat").click(function(){
  $(".categories").toggleClass("active1");
  $(".category").toggleClass("active1");

});



function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


function myfun() {
	window.location.href = "inner.html";
  location.replace("inner.html")
}