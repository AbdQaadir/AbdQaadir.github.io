AOS.init({
  // Global settings:
  disable: 'mobile phone tablet', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 100, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 80, // offset (in px) from the original trigger point
  delay: 50, // values from 0 to 3000, with step 50ms
  duration: 2000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


//Typewriter Effect
new TypeIt('#typewriter', {
  strings: ['Hello! I\'m Lateef Qaadir Olayinka.',
             'I\'m a Front-End Developer based in Oyo state, Nigeria.'],
  speed: 80,
  
  waitUntilVisible: true,
  cursor: false,
  lifeLike: true,
  loop: false,
}).pause(1000)
.go();

new TypeIt('#phoneNumber', {
  strings: "+234 9035 394 858",
  waitUntilVisible: true,
  cursor: true,
  lifeLike: true,
  speed: 100,
}).go();



// Carousel
var $myCarousel = $('#myCarousel');

// Initialize carousel
$myCarousel.carousel();


function doAnimations(elems) {
  var animEndEv = 'webkitAnimationEnd animationend';

  elems.each(function () {
    var $this = $(this),
        $animationType = $this.data('animation');

    // Add animate.css classes to
    // the elements to be animated
    // Remove animate.css classes
    // once the animation event has ended
    $this.addClass($animationType).one(animEndEv, function () {
      $this.removeClass($animationType);
    });
  });
}

// Select the elements to be animated
// in the first slide on page load
var $firstAnimatingElems = $myCarousel.find('.carousel-item:first')
  .find('[data-animation ^= "animated"]');

// Apply the animation using the doAnimations()function
doAnimations($firstAnimatingElems);

// Attach the doAnimations() function to the
// carousel's slide.bs.carousel event
$myCarousel.on('slide.bs.carousel', function (e) {
  // Select the elements to be animated inside the active slide
  var $animatingElems = $(e.relatedTarget)
    .find("[data-animation ^= 'animated']");
  doAnimations($animatingElems);
});

