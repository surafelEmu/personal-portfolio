
window.onload = function() {

    
    let elementsArray = document.querySelectorAll(".tile");
    console.log(elementsArray);
    
   window.scroll =  function fadeIn() {
        for (var i = 0; i < elementsArray.length; i++) {
            var elem = elementsArray[i]
    
            console.log(elementsArray[i])
            var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
            if (distInView < 0) {
                elem.classList.add("inView");
            } else {
                elem.classList.remove("inView");
            }
        }
    }
    fadeIn();
}