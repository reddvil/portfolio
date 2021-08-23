// $(document).ready(function(){
//   $('.login').click(function(event){
//     $('.login').toggleClass('active_btn');
//     $('.loginform,.navbar').toggleClass('active1');
//   });
// });  




function openCart() {
  document.getElementById("mySidebar").style.width = "320px";
  // document.getElementById("body").style.marginLeft = "-320px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeCart() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("body").style.marginLeft = "0";
}



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("profile_btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


