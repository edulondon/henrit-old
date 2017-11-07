

 $(document).ready(function(){
     
            $('.slider').slider({
            full_width: false,
            interval:5000,
            transition:800,
            height:600,
        });



        $(".button-collapse").sideNav();
        $('.carousel.carousel-slider').carousel({fullWidth: true});
    });