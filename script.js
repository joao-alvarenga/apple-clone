const toggle = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');

toggle.onclick = function(){ 
toggle.classList.toggle('active');
navMenu.classList.toggle('active');;
};


var dropdown = document.getElementsByClassName("footer-dropdown");
var i;

for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
      this.classList.toggle("open");
      var dropdownOpen = this.nextElementSibling;
if (dropdownOpen.style.display === "block") {
      dropdownOpen.style.display = "none";
      } else {
      dropdownOpen.style.display = "block";
     }
     });
   }
   
   $(document).ready(function(){

    $('.open').click(function(){
       $('.footer-dropdown::after').css('display','none');
      
    });
 });