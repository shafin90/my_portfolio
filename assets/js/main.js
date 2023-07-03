/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 




function initSliders() {
    const sliders = document.querySelectorAll(".work__img-slider");

    sliders.forEach((slider) => {
      const slides = slider.querySelectorAll(".work__img-slide");
      let currentSlide = 0;

      function showSlide(index) {
        slides.forEach((slide, i) => {
          slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
      }

      // Function to move to the next slide
      function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      }

      // Function to move to the previous slide
      function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
      }

      // Auto slide functionality (uncomment if you want the slider to auto-scroll)
      // setInterval(nextSlide, 3000);

      // Add event listeners to the navigation arrows
      const nextArrow = slider.parentElement.querySelector(".work__img-slider-next");
      const prevArrow = slider.parentElement.querySelector(".work__img-slider-prev");

      if (nextArrow && prevArrow) {
        nextArrow.addEventListener("click", nextSlide);
        prevArrow.addEventListener("click", prevSlide);
      }
    });
  }

  // Call the function to initialize the sliders after the page has loaded
  window.addEventListener("DOMContentLoaded", initSliders);