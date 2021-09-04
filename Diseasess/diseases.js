var indx = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("pet_img");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  indx++;
  if (indx > x.length) {indx = 1}    
  x[indx-1].style.display = "block";  
  setTimeout(carousel, 2000);
}
