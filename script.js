var coll = document.getElementsByClassName("collapsible");
var i;
let holder;

for (i = 0; i < coll.length; i++) {

  coll[i].addEventListener("click", function() { 
    for (i = 0; i < coll.length; i++){
        if(coll[i].classList.length == 2) {
            holder = coll[i];
            coll[i].classList.toggle("active");
            var content = coll[i].nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
                } else {
                content.style.display = "block";
                }
            } 
    }
    if(holder == this){

    } else {

    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
    

}
holder = 0; 

})
};
