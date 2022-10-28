const carouselEl = $('.my-carousel');

    // Bootstrap carousel needs to be loaded first
    carouselEl.carousel().swipeCarousel({
        sensitivity: 'high' // low, medium or high
    });

    const carouselEl2 = $('.my-carousel-2');

    // Bootstrap carousel needs to be loaded first
    carouselEl2.carousel().swipeCarousel({
        sensitivity: 'high' // low, medium or high
    });

    feather.replace()

    function myFunction() {
        var x = document.getElementById("nav-segments");
        if (x.style.display === "flex") {
          x.style.display = "none";
        } else {
          x.style.display = "flex";
        }
      }