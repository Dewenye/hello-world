var slideIndex = 0;
showSlides();
function slideShow() {
    
    var slides = document.getElementsByClassName("myimages");
    for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";    
    }
    slideIndex++;
    if (slideIndex >= slides.length)(
        slideIndex = 0;
        )
   slides[slideIndex].style.display = "block";
   setTimeout(showSlides, 4000);
   
}

//1st loop: i = 0, slides[0] = img1
//2nd loop i = 1, slides[1] = img2
//3rd loop i = 2, slides[2] = img3
//4th loop i = , slides[] = img
