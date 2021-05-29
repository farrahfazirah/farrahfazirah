// BLOB
  var radius = 8;
  TweenMax.staggerFromTo('.blob', 4 ,{
    cycle: {
      attr:function(i) {
        var r = i*90;
        return {
          transform:'rotate('+r+') translate('+radius+',0.1) rotate('+(-r)+')'
        }      
      }
    }  
  },{
    cycle: {
      attr:function(i) {
        var r = i*90+360;
        return {
          transform:'rotate('+r+') translate('+radius+',0.1) rotate('+(-r)+')'
        }      
      }
    },
    ease:Linear.easeNone,
    repeat:-1
  });

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}