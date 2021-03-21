// show/hide titles when hover
function showTitle1(){
    var x = document.getElementById("title1");
    x.style.display = "block";
    
}
function hideTitle1(){
    var x = document.getElementById("title1");
    x.style.display = "none";
}

function showTitle2(){
    var x = document.getElementById("title2");
    x.style.display = "block";
    
}
function hideTitle2(){
    var x = document.getElementById("title2");
    x.style.display = "none";
}
function showTitle3(){
    var x = document.getElementById("title3");
    x.style.display = "block";
    
}
function hideTitle3(){
    var x = document.getElementById("title3");
    x.style.display = "none";
}
function showTitle4(){
    var x = document.getElementById("title4");
    x.style.display = "block";
    
}
function hideTitle4(){
    var x = document.getElementById("title4");
    x.style.display = "none";
}
function showTitle5(){
    var x = document.getElementById("title5");
    x.style.display = "block";
    
}
function hideTitle5(){
    var x = document.getElementById("title5");
    x.style.display = "none";
}
function showTitle6(){
    var x = document.getElementById("title6");
    x.style.display = "block";
    
}
function hideTitle6(){
    var x = document.getElementById("title6");
    x.style.display = "none";
}
function showTitle7(){
    var x = document.getElementById("title7");
    x.style.display = "block";
    
}
function hideTitle7(){
    var x = document.getElementById("title7");
    x.style.display = "none";
}
function showTitle8(){
    var x = document.getElementById("title8");
    x.style.display = "block";
    
}
function hideTitle8(){
    var x = document.getElementById("title8");
    x.style.display = "none";
}
function showTitle9(){
    var x = document.getElementById("title9");
    x.style.display = "block";
    
}
function hideTitle9(){
    var x = document.getElementById("title9");
    x.style.display = "none";
}
function showTitle10(){
    var x = document.getElementById("title10");
    x.style.display = "block";
    
}
function hideTitle10(){
    var x = document.getElementById("title10");
    x.style.display = "none";
}
//modal -- open 
function openNewPage1(){
    window.location.href = "image01.html";
}
function openNewPage2(){
    window.location.href = "image02.html";
}
function openNewPage3(){
    window.location.href = "image03.html";
}
function openNewPage4(){
    window.location.href = "image04.html";
}
function openNewPage5(){
    window.location.href = "image05.html";
}
function openNewPage6(){
    window.location.href = "image06.html";
}
function openNewPage7(){
    window.location.href = "image07.html";
}
function openNewPage8(){
    window.location.href = "image08.html";
}
function openNewPage9(){
    window.location.href = "image09.html";
}
function openNewPage10(){
    window.location.href = "image10.html";
}

//modal -- close 
var close = document.getElementsByClassName("closeBtn");

for (var i = 0; i < close.length; i++){
    close[i].addEventListener('click', function(){
      window.location.href = "index.html";
    })
  };

var modal = document.getElementById("simpleModal");
window.addEventListener("click", function(a){
    if (a.target == modal) {
        modal.style.display = "none";
        window.location.href = "index.html";
    }
})